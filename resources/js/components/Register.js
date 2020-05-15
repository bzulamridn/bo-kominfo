import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//mport swal from '@sweetalert/with-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { css } from "@emotion/core";
import { BounceLoader } from "react-spinners";
import { Router, Link, Redirect, browserHistory } from 'react-router';
import validator from 'validator';

toast.configure({
    autoClose: 8000,
    draggable: true,
    //etc you get the idea
});

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama:'',
            email: '',
            no_hp : '',
            username: '',
            password: '',
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    notify() {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    alertSukses() {
        // swal(
        //     <div>
        //         <h1>Hello!</h1>
        //         <p>I am a React component inside a SweetAlert modal.</p>
        //     </div>
        // );
    }

    register() {
        if (this.state.username === '' || this.state.password === '' ||  this.state.no_hp === '' || this.state.nama === '' || this.state.email === '') {
            toast.error("Pastikan semua data terisi", {
                position: toast.POSITION.TOP_RIGHT
            });
        }else {
            if (!validator.isEmail(this.state.email)) {
                toast.error("Email Tidak Valid", {
                    position: toast.POSITION.TOP_RIGHT
                });
              }else{
                this.setState({
                    isLoading: true
                })
                axios.post('/api/register', {
                    nama : this.state.nama,
                    username : this.state.username,
                    no_hp : this.state.no_hp,
                    email : this.state.email,
                    password : this.state.password,
                })
                .then(res => {
                    if(res.data.status === '2'){
                        this.setState({
                            isLoading: false
                        })
                        toast.error("Email Sudah Pernah digunakan", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }else if(res.data.status === '1'){
                        browserHistory.push('/passcode/'+this.state.email);
                    }else{
                        toast.error("Mohon Periksa Kembali Data Anda", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                })

              }
            
        }
    }

    handleChange(event) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        })
    }

    render() {
        return (
            <div>
                <div className="login-register">
                    <div className="login-box card">
                        <div className="card-body">
                            <form className="form-horizontal form-material" id="loginform">
                                <center style={{ margin: 30 }}><img src="/assets/img/logo.png" width="80px" /></center>
                                <div className="form-group" style={{ marginTop: 30 }}>
                                    <div className="col-xs-12">
                                        <input className="form-control" type="text" placeholder="Nama Instansi" name="nama" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="email" placeholder="example@example.com" name="email" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="text" placeholder="08570547***" name="no_hp" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                                    </div>
                                </div>

                            </form>
                            <div className="form-group text-center" >
                                <div className="col-xs-12 p-b-20">
                                    {this.state.isLoading ?
                                        (<div className="sweet-loading" style={{ marginTop: 40 }}>
                                            <BounceLoader
                                                css={override}
                                                size={40}
                                                //size={"150px"} this also works
                                                color={"#123abc"}
                                            />
                                            <small style={{ marginTop: 30 }}>memeriksa data anda</small>
                                        </div>)
                                        :
                                        (<div>

                                            <button style={{ marginBottom: 30 }} className="btn btn-block btn-lg btn-info" onClick={() => this.register()} >Daftar</button>
                                            <center>
                                               <h5> <Link to="/"> Login</Link></h5>
                                            </center>

                                        </div>)
                                    }
                                </div>
                            </div>
                            <center><small className="form-text text-muted">- Telematics Control Management Room -</small></center>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

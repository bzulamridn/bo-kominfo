import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//mport swal from '@sweetalert/with-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { css } from "@emotion/core";
import { BounceLoader } from "react-spinners";
import { Router, Link, browserHistory } from 'react-router';

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

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            akses : 'operator'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUnmount(){
        
    }

    login() {
        if (this.state.username === '' || this.state.password === '') {
            toast.error("Username Password tidak boleh kosong", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            this.setState({
                isLoading: true
            })
         
            axios.get(`/api/loginop/${this.state.email}/${this.state.password}/${this.state.akses}`)
            .then(res => {
                //console.log(res.data)
                if(res.data.status === '1'){
                    this.setLocalStoradge(res.data.data.id)
                }else{
                    toast.error("Username dan Password Tidak Sesuai atau Akun Anda Belum Aktif / Terblokir", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.setState({
                        isLoading: false
                    })
                }
            })
        }
    }

    setLocalStoradge = async(id) => {
        await localStorage.setItem('id', id)
        await localStorage.setItem('akses', 'operator')
        window.location.assign("/auth");
    }   

    handleChange(event) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        })
    }

    passcodePage(){
        browserHistory.push('/passcode')
    }

    render() {
        return (
            <div>
                <div className="login-register">
                    <div className="login-box card">
                        <div className="card-body">
                            <form className="form-horizontal form-material" id="loginform">
                                <center style={{ margin: 30 }}><img src="/assets/img/logo.png" width="80px" />
                                    <h5 style={{marginTop:10}}>Dinas Kominfo Kota Singkawang</h5></center>
                                <div className="form-group" style={{ marginTop: 30 }}>
                                    <div className="col-xs-12">
                                        <input className="form-control" type="text" placeholder="Email" name="email" onChange={this.handleChange} />
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
                                            <small style={{ marginTop: 50 }}>memeriksa data anda</small>
                                        </div>)
                                        :
                                        (<div>

                                            <button style={{ marginBottom: 20 }} className="btn btn-block btn-lg btn-info" onClick={() => this.login()} >Log In</button>
                                           
                                           
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


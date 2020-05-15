// Insert Email Untuk Reset Password

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//mport swal from '@sweetalert/with-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { css } from "@emotion/core";
import { BounceLoader } from "react-spinners";
import { Router, Link, browserHistory } from 'react-router';
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

export default class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passcode: '',
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    resetPassword(){
        axios.post('/api/resetpassword', {
            email : this.state.email,
            password : this.state.password,
            passcode : this.state.passcode,
        })
        .then(res => {
            if(res.data.status === '1'){
                toast.success("Password Anda Berhasil di Ganti, Anda akan diarahkan ke halaman login dalam 5 detik", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => browserHistory.push('/'), 5000)
            }else{
                toast.error("Aksi Gagal diLakukan", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
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
                                        <label>Masukan Email Anda yang telah Terdaftar</label>
                                        <input className="form-control" type="email" placeholder="Email" name="email" onChange={this.handleChange} />
                                    </div>

                                    <div className="col-xs-12" style={{marginTop: 20}}>
                                        <label>Masukan Passcode Anda (Passcode Pertama saat Anda Registrasi)</label>
                                        <input className="form-control" type="email" placeholder="Ex. 67771" name="passcode" onChange={this.handleChange} />
                                    </div>

                                    <div className="col-xs-12" style={{marginTop: 20}}> 
                                        <label>Masukan Password Baru Anda</label>
                                        <input className="form-control" type="text" placeholder="xxxxxxx" name="password" onChange={this.handleChange} />
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
                                                color={"#123abc"}
                                            />
                                            <small style={{ marginTop: 50 }}>memeriksa data anda</small>
                                        </div>)
                                        :
                                        (<div>
                                            <button style={{ marginBottom: 20 }} className="btn btn-block btn-lg btn-info" onClick={() => this.resetPassword()} >Reset Password</button>
                                        </div>)
                                    }
                                </div>
                            </div>
                            <center><small className="form-text text-muted">- Telemathic Control Management Room -</small></center>
                            <center><small>Helpdesk (eGov) <b>+6285705477252</b></small></center>
                            {/* <button onClick={ ()=>this.passcodePage() } >Passcode Page</button>
                                <button onClick={ ()=>this.testEmail() } >Tes Email</button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


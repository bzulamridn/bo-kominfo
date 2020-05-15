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

    login() {
        if (this.state.username === '' || this.state.password === '') {
            toast.error("Username Password tidak boleh kosong", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            this.setState({
                isLoading: true
            })
        }
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

    testEmail(){
        axios.get('/api/tesendemail')
        .then(res => {
            alert(res.data.status)
        })
    }

    render() {
        return (
            <div>
                 <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Profil</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Profil</li>
                            </ol>
                        </div>
                    </div>
                </div>
              
                 
            </div>
        );
    }
}


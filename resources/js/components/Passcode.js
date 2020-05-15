import React, { Component, useState, useEffect } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Router, Link, Redirect, browserHistory } from 'react-router';


export default function Passcode(props) {

    const [OTP, setOTP] = useState("");
    const cekValue = () => {
        if (OTP.length < 6) {
            toast.error("Passcode Teridiri dari 6 Karakter", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            axios.get("/api/conf/" + props.params.email + "/" + OTP)
                .then(res => {
                    if (res.data.status === '0') {
                        toast.error("Passcode Tidak Sesuai", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    } else {
                        toast.success("Passcode Anda Sesuai, Anda akan di arahkan ke halaman login dalam 5 detik", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        setTimeout(() => browserHistory.push('/'), 5000)
                    }
                })
        }
    }

    const kirimUlang = () => {
        alert("Kirim Ulang")
        axios.get('/api/resend/'+props.params.email)
        .then(res => {
            if(res.data.status === '1'){
                toast.success("Berhasil mengirim Passcode ke Email Anda", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }else{
                toast.error("Periksa Kembali Email Anda", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
        console.log("TES")
    }

    return (
        <div className="login-register">
            <div className="login-box card">
                <div className="card-body">
                    <center style={{ margin: 30 }}><img src="/assets/img/logo.png" width="80px" /></center>
                    <p>Masukan 6 digit <b>Passcode</b> yang dikirimkan ke email anda : <b> {props.params.email} </b></p>
                    <div style={{ padding: 10 }}>
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            maxTime={false}
                        />
                    </div>
                    <button className="btn btn-info btn-block" style={{ marginBottom: 7 }} onClick={() => cekValue()} >Konfirmasi</button>
                    <button className="btn btn-danger btn-block" style={{ marginBottom: 7 }} onClick={() => kirimUlang()} >Kirim Ulang</button>
                    {/* <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> */}
                </div>

            </div>
        </div>
    );

}


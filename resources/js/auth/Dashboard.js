import 'date-fns';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//mport swal from '@sweetalert/with-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { css } from "@emotion/core";
import { BounceLoader, PacmanLoader } from "react-spinners";
import { Router, Link, browserHistory } from 'react-router';
import { Button, Modal } from 'react-bootstrap';
import "@kenshooui/react-multi-select/dist/style.css";
import moment from 'moment'
import 'moment/locale/id'  // without this line it didn't work
moment.locale('id')
//import "./css/jquery.dataTables.css";


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

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            agendaNull: false,
            agenda: [],
            show: false,
            agendadetail: [],
            isModalLoading: true,
            catatan: '',
            harini: moment().format('YYYY-MM-DD'),
      
        }
    }

    componentDidMount() {
        this.agenda();
        moment.locale('id');
    }


    show(val) {
        if (val === 1) {
            this.setState({
                show: true,
            })
        } else {
            this.setState({
                show: false,
            })
        }
    }

    agenda() {
        this.setState({
            isLoading: true
        })
        axios.get('/api/dashboard')
            .then(res => {
                console.log(res.data);
                this.setState({
                    isLoading: false,
                })
                if (res.data.data.length != 0) {
                    this.setState({
                        agenda: res.data.data,
                        agendaNull: false,
                    })
                    console.log(res.data.data)
                } else {
                    this.setState({
                        agendaNull: true,
                    })
                }
            })
    }

    render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#fcf8e3",
            color: "#8a6d3b"
        };
        const { isLoading, agendaNull, agenda, show, agendadetail, isModalLoading, harini} = this.state;
        return (
            <div>
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Dashboard</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {isLoading ?
                    (<div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
                        <PacmanLoader
                            css={override}
                            size={40}
                            //size={"150px"} this also works
                            color={"#123abc"}
                        />
                    </div>)
                    :
                    (<div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex m-b-40 align-items-center no-block">
                                        <h5 className="card-title ">Jadwal TCM Room Bulan {moment().format('MMMM YYYY')}</h5>
                                        <div className="ml-auto">
                                            <ul className="list-inline font-12">

                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        {agendaNull ? (
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-body">
                                        <h5 className="card-title">Belum ada Jadwal Bulan {moment().format('MMMM YYYY')}</h5>
                                                </div>
                                            </div>
                                        ) : (
                                                <div>
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-striped display">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Tanggal</th>
                                                                    <th>Nama Dinas / Instansi</th>
                                                                    <th>Nama Kegiatan</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {agenda.map((data, key) =>
                                                                    <tr key={key}>
                                                                        <td>{key + 1}</td>
                                                                        <td>{moment(data.tanggal).format('dddd, DD MMMM YYYY')}</td>
                                                                        <td>{data.instansi}</td>
                                                                        <td>{data.nama_kegiatan}</td>
                                                                        <td>{(() => {
                                                                            if (data.tanggal === harini) {
                                                                                return (<span class="badge badge-success">On Schedule / Sedang Berlangsung</span>)
                                                                            } else if (data.tanggal > harini) {
                                                                                // this.interval = setInterval(() => {
                                                                                    //const { timeTillDate, timeFormat } = this.props;
                                                                                    const then = moment(data.tanggal);
                                                                                    const now = moment();
                                                                                    const countdown = moment(then - now);
                                                                                    const days= countdown.format('D');
                                                                                    const hours = countdown.format('HH');
                                                                                    const minutes = countdown.format('mm');
                                                                                    const seconds = countdown.format('ss');
                                                                                //}, 1000);
                                                                                return (<span class="badge badge-info">Dimulai dalam {days} Hari Lagi</span>)
                                                                            } else {
                                                                                return (<span class="badge badge-danger">Kegiatan Selesai</span>)
                                                                            }
                                                                        })()}
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)


                }


            </div>
        );
    }
}


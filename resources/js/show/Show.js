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
import './style.css';
import GoogleFontLoader from 'react-google-font-loader';


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

export default class Show extends Component {
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
        <GoogleFontLoader
            fonts={[
                {
                    font: 'Roboto',
                    weights: [400, '400i'],
                },
                {
                    font: 'Roboto Mono',
                    weights: [400, 700],
                },
            ]}
            subsets={['cyrillic-ext', 'greek']}
        />
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
        axios.get('/api/tv')
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
        const { isLoading, agendaNull, agenda, harini } = this.state;
        return (
            <div className="d-flex align-items-center" >

                {isLoading ?
                    (<div>
                        <PacmanLoader
                            css={override}
                            size={40}
                            //size={"150px"} this also works
                            color={"#123abc"}
                        />
                    </div>)
                    :
                    (<div className="row" >
                        <div className="col-lg-12 col-lg-12">
                                    <div>
                                        {agendaNull ? (
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Belum ada Jadwal Bulan {moment().format('MMMM YYYY')}</h5>
                                                </div>
                                            </div>
                                        ) : (
                                                <div>
                                                    <div className="table-responsive shadowx" style={{borderRadius:15, backgroundColor:'white'}}>
                                                        <table className="table-hover" style={{ padding:20}} >
                                                            <thead className="text-center" style={{ backgroundColor:'#273c75', color:'white' }} >
                                                                <tr style={{ height: 70}}>
                                                                    <th style={{ width:150 }}><center>No</center></th>
                                                                    <th style={{ width: 350 }}>Tanggal</th>
                                                                    <th style={{ width: 350 }}>Jam</th>
                                                                    <th>Nama Dinas / Instansi</th>
                                                                    <th>Nama Kegiatan</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {agenda.map((data, key) =>
                                                                    <tr key={key} style={{height:70, borderBottom:'1px solid #dcdde1'}}>
                                                                        <td style={{ width:150 }}><center>{key + 1}</center></td>
                                                                        <td style={{ width: 350 }}>{moment(data.tanggal).format('dddd, DD MMMM YYYY')}</td>
                                                                        <td>{data.jam_mulai} sampai {data.jam_selesai}</td>
                                                                        <td style={{ width: 500 }}>{data.instansi}</td>
                                                                        <td style={{ width: 800 }}>{data.nama_kegiatan}</td>
                                                                        <td style={{ width: 300,}}><center>{(() => {
                                                                            if (data.tanggal === harini) {
                                                                                return (<span class="badge badge-success">On Schedule / Sedang Berlangsung</span>)
                                                                            } else if (data.tanggal > harini) {
                                                                                // this.interval = setInterval(() => {
                                                                                //const { timeTillDate, timeFormat } = this.props;
                                                                                const then = moment(data.tanggal);
                                                                                const now = moment();
                                                                                const countdown = moment(then - now);
                                                                                const days = countdown.format('D');
                                                                                const hours = countdown.format('HH');
                                                                                const minutes = countdown.format('mm');
                                                                                const seconds = countdown.format('ss');
                                                                                //}, 1000);
                                                                                return (<span class="badge badge-info">Dimulai dalam {days} Hari Lagi</span>)
                                                                            } else {
                                                                                return (<span class="badge badge-danger">Kegiatan Selesai</span>)
                                                                            }
                                                                        })()}
                                                                        </center></td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                            <thead className="text-center" style={{ backgroundColor:'#273c75', color:'white' }} >
                                                                <tr style={{ height: 70}}>
                                                                    <th style={{ width:150 }}><center>No</center></th>
                                                                    <th style={{ width: 350 }}>Tanggal</th>
                                                                    <th>Nama Dinas / Instansi</th>
                                                                    <th>Nama Kegiatan</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>)


                }


            </div>
        );
    }
}


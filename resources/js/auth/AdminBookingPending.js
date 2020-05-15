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
import "@kenshooui/react-multi-select/dist/style.css"
import moment from 'moment'
import 'moment/locale/id'  // without this line it didn't work
moment.locale('id')


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

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

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
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.agenda();
        axios.get('/api/fasilitas')
            .then(res => {
                this.setState({
                    items: res.data.data
                })
                console.log(res.data.data)
            })
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

    detailAgenda = async (val) => {
        this.show(1);
        await axios.get('/api/detailagenda/' + val)
            .then(res => {
                this.setState({
                    isModalLoading: false,
                    agendadetail: res.data.data
                })
                console.log(res.data.data)
            })

    }

    setuju(val) {
        if (this.state.catatan === '') {
            toast.error("Berikan Catatan", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            axios.get('/api/konfirmasiok/' + val + "/" + this.state.catatan)
                .then(res => {
                    this.show(0)
                    this.agenda()
                    toast.success("Kegiatan Berhasil Dikonfirmasi & Dijadwalkan", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    window.open(`https://api.whatsapp.com/send?phone=+62${res.data.data.no_hp}&text=Halo ${res.data.data.nama} Permintaan anda tentang peminjaman ruangan TCM Room untuk kegiatan ${res.data.data.nama_kegiatan} disetujui, silahkan menyerahkan surat pengantar paling lambat 1 hari sebelum kegiatan. Cek Email anda untuk keterangan lebih lanjut. Terima Kasih`)
                })
        }

    }

    batal(val) {
        if (this.state.catatan === '') {
            toast.error("Berikan Catatan", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            axios.get('/api/konfirmasicancel/' + val + "/" + this.state.catatan)
                .then(res => {
                    this.show(0)
                    this.agenda()
                    toast.error("Kegiatan Berhasil Ditolak", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    window.open(`https://api.whatsapp.com/send?phone=+62085705477252&text=Halo ${res.data.data.nama} Permintaan anda tentang peminjaman ruangan TCM Room untuk kegiatan ${res.data.data.nama_kegiatan} tidak disetujui. Cek email anda untuk keterangan lebih lanjut. Terima Kasih `)
                })
        }
    }

    agenda() {
        this.setState({
            isLoading: true
        })
        axios.get('/api/agendapending')
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

    handleChange(event) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val,
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
        const { isLoading, agendaNull, agenda, show, agendadetail, isModalLoading } = this.state;
        return (
            <div>
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Permintaan Menggunakan Ruangan</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Agenda</li>
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
                                        <h5 className="card-title ">Permintaan Menggunakan Ruangan</h5>
                                        <div className="ml-auto">
                                            <ul className="list-inline font-12">

                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        {agendaNull ? (
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Belum ada permintaan penggunaan TCM Room</h5>
                                                </div>
                                            </div>
                                        ) : (
                                                <div>
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Instansi</th>
                                                                    <th>Nama Kegiatan</th>
                                                                    <th>Tanggal</th>
                                                                    <th>#</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {agenda.map((data, key) =>
                                                                    <tr key={key}>
                                                                        <td>{key + 1}</td>
                                                                        <td>{data.nama}</td>
                                                                        <td>{data.nama_kegiatan}</td>
                                                                        <td>{moment(data.tanggal_mulai).format('DD MMMM YYYY')} - {moment(data.tanggal_selesai).format('DD MMMM YYYY')}</td>
                                                                        <td><a href={"/Surat_Pengantar/" + data.pdf_file} target="_blank" className="btn btn-secondary"><i className="ti-book"></i>  Surat Pengantar</a> <button className="btn btn-info" onClick={() => this.detailAgenda(data.id)}><i className="ti-check-box"></i> Detail Kegiatan & Konfirmasi</button></td>
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
                        <Modal
                            show={show}
                            onHide={() => this.show(0)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>E -Ticket</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {isModalLoading ? (
                                    <div>
                                        <PacmanLoader
                                            css={override}
                                            size={30}
                                            //size={"150px"} this also works
                                            color={"#123abc"}
                                        />
                                    </div>
                                ) : (
                                        <div style={{ padding: 10 }}>
                                            <div style={{ borderWidth: 3, borderColor: 'black' }}>
                                                <h4>{agendadetail.nama}</h4>
                                                <hr></hr>
                                                <table style={{ fontSize: 16 }}>
                                                    <tr>
                                                        <td><b>Nama Kegiatan</b></td>
                                                        <td style={{ width: 30 }}></td>
                                                        <td>{agendadetail.nama_kegiatan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b> PerkiraanJumlah Peserta</b></td>
                                                        <td style={{ width: 30 }}></td>
                                                        <td>{agendadetail.jumlah_peserta} orang</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Tanggal Kegiatan</b></td>
                                                        <td style={{ width: 30 }}></td>
                                                        <td>{moment(agendadetail.tanggal_mulai).format('DD MMMM YYYY')} sampai {moment(agendadetail.tanggal_selesai).format('DD MMMM YYYY')}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Jam Kegiatan</b></td>
                                                        <td style={{ width: 30 }}></td>
                                                        <td>{agendadetail.jam_mulai} sampai {agendadetail.jam_selesai}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Fasilitas yang Digunakan</b></td>
                                                        <td style={{ width: 30 }}></td>
                                                        <td>{agendadetail.fasilitas}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Catatan</b></td>
                                                        <td style={{ width: 30 }}></td>
                                                        <td>{agendadetail.catatan}</td>
                                                    </tr>
                                                </table>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label className="control-label">Catatan Konfirmasi</label>
                                                            <textarea className="form-control" onChange={this.handleChange} name="catatan"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <button className="btn btn-danger btn-block" onClick={() => this.batal(agendadetail.id)}> Tidak Setuju </button>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <button className="btn btn-info btn-block" onClick={() => this.setuju(agendadetail.id)}> Setujui </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.show(0)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>)
                }
            </div>
        );
    }
}


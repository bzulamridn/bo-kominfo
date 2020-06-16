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
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
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

export default class Instansi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            agendaNull: false,
            newfasilitas: '',
            instansi: [],
            show: false,
            id: ''
        }
    }

    componentDidMount() {
        this.instansiall();
    }

    notify() {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    show(val, id) {
        if (val === 1) {
            this.setState({
                show: true,
                id : id
            })
        } else {
            this.setState({
                show: false,
            })
        }
    }

    aktifOrBlok(val){
        axios.get('/api/aktiforblock/'+val+'/'+this.state.id)
        .then(res => {
            if(res.data.status === '1'){
                this.show(0,'')
                this.instansiall()
                if(val === 2){
                    toast.error("Akun Instansi Sukses Diblokir", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }else if(val === 3){
                    toast.error("Akun Instansi Sukses Dihapus", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }else{
                    toast.success("Akun Diaktifkan", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            }else{
                this.show(0,'')
                this.instansiall()
                toast.warning("Aksi Gagal Dilakukan", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }

    instansiall() {
        this.setState({
            isLoading: true
        })
        axios.get('/api/getinstansi')
            .then(res => {
                this.setState({
                    isLoading: false,
                    instansi: res.data.data
                })
                console.log(res.data.data)
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
        const { isLoading, newfasilitas, instansi, show } = this.state;
        return (
            <div>
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Instansi</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Instansi</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">

                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title ">Instansi Terdaftar</h5>
                                </div>
                                <hr></hr>
                                {isLoading ?
                                    (<div className="sweet-loading" style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                                        <PacmanLoader
                                            css={override}
                                            size={20}
                                            //size={"150px"} this also works
                                            color={"#123abc"}
                                        />
                                    </div>)
                                    :
                                    (
                                        <div>
                                            <div>
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Nama Instansi</th>
                                                                <th>Username</th>
                                                                <th>HP / Email</th>
                                                                <th>Tanggal Daftar</th>
                                                                <th>Status</th>
                                                                <th>#</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {instansi.map((data, key) =>
                                                                <tr key={key}>
                                                                    <td>{key + 1}</td>
                                                                    <td>{data.nama}</td>
                                                                    <td>{data.username}</td>
                                                                    <td>{data.no_hp} / {data.email}</td>
                                                                    <td>{moment(data.created_at).format('DD MMMM YYYY')}</td>
                                                                    <td>{data.aktif === "0" ? <span class="badge badge-warning">Belum Aktifasi Email</span> : data.aktif === "1" ? <span class="badge badge-info">Aktif</span> : <span class="badge badge-danger">Blokir</span>}</td>
                                                                    <td><button className="btn btn-info" onClick={ () => this.show(1, data.id) }> Tindakan User </button></td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <Modal
                                                show={show}
                                                onHide={() => this.show(0)}
                                                size="sm"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Tindakan</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <button className="btn btn-info btn-block" onClick={() => this.aktifOrBlok(1)}>Aktifkan</button>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <button className="btn btn-warning btn-block" onClick={() => this.aktifOrBlok(2)}>Blokir</button>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <button className="btn btn-danger btn-block" onClick={() => this.aktifOrBlok(3)}>Hapus</button>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={() => this.show(0)}>
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


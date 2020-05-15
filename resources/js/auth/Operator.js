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
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MultiSelectReact from 'multi-select-react';
import "@kenshooui/react-multi-select/dist/style.css"
import MultiSelect from "@kenshooui/react-multi-select";
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
            op3ratorNull: false,
            operator: [],
            show: false,
            nama: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
       
    }

    componentDidMount() {
        this.operator();
    }

    notify() {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT
        });
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


    operator() {
        this.setState({
            isLoading: true
        })
        axios.get('/api/operator')
            .then(res => {
                console.log(res.data);
                this.setState({
                    isLoading: false,
                })
                if (res.data.data.length != 0) {
                    this.setState({
                        operator: res.data.data,
                        operatorNull: false,
                    })
                    console.log(res.data.data)
                } else {
                    this.setState({
                        operatorNull: true,
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

    submit() {
        const { nama, email, password } = this.state;
        // if (namakegiatan === '' || jumlahpeserta === '' || catatan === '' || selectedDateMulai === null || selectedDateSelesai === null, jamMulai === null, jamSelesai === null, pdfFIle === null || selectedItems === null) {
        //     toast.error("Lengkapi data Isian", {
        //         position: toast.POSITION.TOP_RIGHT
        //     });
        // } else {
        const data = new FormData();
        data.append('nama', nama);
        data.append('email', email);
        data.append('password', password);
        axios.post('/api/addoperator', data)
            .then(res => {
                if (res.data.status === '1') {
                    toast.success("Data Operator Berhasil Disimpan", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.show(0)
                    this.operator()
                }
            })
    }

    hapus(id){
        axios.get('/api/deloperator/'+id)
        .then(res=>{
            if (res.data.status === '1') {
                toast.success("Fasilitas Berhasil Dihapus", {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.operator();
            } else {
                toast.danger("Kesalahan", {
                    position: toast.POSITION.TOP_RIGHT
                });
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
        const { isLoading, operatorNull, operator, show} = this.state;
        return (
            <div>
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Agenda</h4>
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
                    (<div className="sweet-loading" style={{ justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
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
                                        <h5 className="card-title ">AGENDA ANDA</h5>
                                        <div className="ml-auto">
                                            <ul className="list-inline font-12">
                                                <button type="button" className="btn btn-info d-none d-lg-block m-l-15" onClick={() => this.show(1)}><i className="fa fa-plus-circle"></i> Tambah Operator</button>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        {operatorNull ? (
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Belum Ada Operator</h5>
                                                </div>
                                            </div>
                                        ) : (
                                                <div>
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Nama Operator</th>
                                                                    <th>Email</th>
                                                                    <th>#</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {operator.map((data, key) =>
                                                                    <tr key={key}>
                                                                        <td>{key+1}</td>
                                                                        <td>{data.nama}</td>
                                                                        <td>{data.email}</td>
                                                                        <td><button className="btn btn-danger" onClick={()=>this.hapus(data.id)}><i className="fa fa-trash"></i> Hapus</button></td>
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
                                <Modal.Title>Buat Agenda</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <div className="form-group">
                                        <label className="control-label">Nama Operator</label>
                                        <input type="text" className="form-control" name="nama" onChange={this.handleChange} placeholder="Mister Bojetx" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Email</label>
                                        <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="bojetx@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Password</label>
                                        <input type="text" className="form-control" name="password" onChange={this.handleChange} placeholder="XXXXXXXX" />
                                    </div>
                                    <hr></hr>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.show(0)}>
                                    Close
                                </Button>
                                <button className="btn btn-info" onClick={() => this.submit()}>
                                    Simpan
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>)


                }


            </div>
        );
    }
}


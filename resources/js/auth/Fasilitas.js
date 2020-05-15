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

export default class Fasiltas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            agendaNull: false,
            newfasilitas: '',
            fasilitas: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fasilitasall();
    }

    notify() {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    fasilitasall() {
        this.setState({
            isLoading: true
        })
        axios.get('/api/fasilitas')
            .then(res => {
                this.setState({
                    isLoading: false,
                    fasilitas: res.data.data
                })
                console.log(res.data.data)
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
        const { newfasilitas, fasilitas } = this.state;
        if (newfasilitas === '') {
            toast.warning("Isian Fasilitas tidak Boleh Kosong", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            axios.get('/api/addfasilitas/' + newfasilitas)
                .then(res => {
                    if (res.data.status === '1') {
                        toast.success("Fasilitas Berhasil Ditambah", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        this.fasilitasall();
                    } else {
                        toast.danger("Kesalahan", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                })
        }

    }

    hapus(id) {
        axios.get('/api/fasilitashapus/'+id)
        .then(res=>{
            if (res.data.status === '1') {
                toast.success("Fasilitas Berhasil Dihapus", {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.fasilitasall();
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
        const { isLoading, newfasilitas, fasilitas } = this.state;
        return (
            <div>
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Fasilitas</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Fasilitas</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">

                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title ">Fasiltas TCM Room</h5>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="newfasilitas" onChange={this.handleChange} placeholder="ex. Vidio Teleconfrence" />
                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <button className="btn btn-info btn-block" onClick={ () => this.submit() }>Tambah Fasiltas</button>
                                    </div>
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
                                                                <th>Fasilitas</th>
                                                                <th>#</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {fasilitas.map((data, key) =>
                                                                <tr key={key}>
                                                                    <td>{key + 1}</td>
                                                                    <td>{data.label}</td>
                                                                    <td><button className="btn btn-danger btn-sm" onClick={() => this.hapus(data.id)}><i className="fa fa-trash"></i>  Hapus</button></td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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


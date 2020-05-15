import 'date-fns';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//mport swal from '@sweetalert/with-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { css } from "@emotion/core";
import { BounceLoader, PacmanLoader, ClockLoader } from "react-spinners";
import { Router, Link, browserHistory } from 'react-router';
import { Button, Modal } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
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
            agendaNull: false,
            agendaku: [],
            show: false,
            showSyarat: false,
            namakegiatan: '',
            jumlahpeserta: '',
            catatan: '',
            syaratketentuan: '',
            selectedDateMulai: new Date(),
            tanggalMulai: '',
            selectedDateSelesai: new Date(),
            tanggalSelesai: '',
            jamMulai: new Date(),
            jamulaiState: '',
            jamSelesai: new Date(),
            jamselesaiState: '',
            multiSelect: [],
            pdfFIle: [],
            items: [],
            selectedItems: [],
            fasilitas: [],
            isLoadingSubmit: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeItems = this.handleChangeItems.bind(this);
        this.addState = this.addState.bind(this);
    }

    componentDidMount() {
        this.agenda();
        this.syarat();
        axios.get('/api/fasilitas')
            .then(res => {
                this.setState({
                    items: res.data.data
                })
                console.log(res.data.data)
            })
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

    syarat() {
        axios.get('/api/syarat')
            .then(res => {
                this.setState({
                    //isLoading: false,
                    syaratketentuan: res.data.data.syarat
                })
                //console.log(res.data.data)
            })
    }

    showsyarat(val) {
        if (this.state.namakegiatan === '' || this.state.jumlahpeserta === '' || this.state.catatan === '' || this.state.selectedItems.length === 0 || this.state.pdfFIle.length === 0) {
            toast.error("Lengkapi data Isian", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            if (val === 1) {
                this.setState({
                    showSyarat: true,
                    show: false
                })
            } else {
                this.setState({
                    showSyarat: false,
                })
            }
        }
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

    agenda() {
        this.setState({
            isLoading: true
        })
        axios.get('/api/agendaku/' + localStorage.getItem('id'))
            .then(res => {
                console.log(res.data);
                this.setState({
                    isLoading: false,
                })
                if (res.data.data.length != 0) {
                    this.setState({
                        agendaku: res.data.data,
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

    handleDateChangeMulai = date => this.setState({ selectedDateMulai: date })
    handleDateChangeSelesai = date => this.setState({ selectedDateSelesai: date })
    onChangeTimeMulai = time => this.setState({ jamMulai: time })
    onChangeTimeSelesai = time => this.setState({ jamSelesai: time })

    passcodePage() {
        browserHistory.push('/passcode')
    }

    fileUploadValidation = (event) => {
        let file_size = event.target.files[0].size;
        let file_name = event.target.files[0].name;
        let file_type = event.target.files[0].type;
        let batas = 3
        let type = 'application/pdf';

        if ((file_size / 1000000) > batas) {
            toast.error("File Terlalu Besar", {
                position: toast.POSITION.TOP_RIGHT
            });
            event.target.value = null
        } else if (file_type !== type) {
            toast.error("Silahkan Masukan File PDF", {
                position: toast.POSITION.TOP_RIGHT
            });
            event.target.value = null
        } else {
            this.setState({
                pdfFIle: event.target.files[0]
            })
        }
    }

    testEmail() {
        axios.get('/api/tesendemail')
            .then(res => {
                alert(res.data.status)
            })
    }
    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
        console.log(this.state.multiSelect)
    }
    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
        console.log(this.state.multiSelect)
    }

    handleChangeItems(selectedItems) {
        this.setState({ selectedItems });
        let i = 0;
        for (i = 0; i > selectedItems.length; i++) {
            console.log(selectedItems[i].value);
        }
    }

    antrian = async () => {
        await this.addState()
        await this.formatdate()
        this.submit()
    }

    addState() {
        let a = this.state.selectedItems.length;
        let arr = this.state.fasilitas;
        for (let i = 0; i < a; i++) {
            arr.push(this.state.selectedItems[i].value)
            this.setState({ fasilitas: arr })
        }
    }

    formatdate(values) {
        let mulai = moment(this.state.selectedDateMulai).format('YYYY-MM-DD')
        let selesai = moment(this.state.selectedDateSelesai).format('YYYY-MM-DD')
        let jamulai = moment(this.state.jamMulai).format('hh:mm')
        let jamselesai = moment(this.state.jamSelesai).format('hh:mm')
        this.setState({
            tanggalMulai: mulai,
            tanggalSelesai: selesai,
            jamulaiState: jamulai,
            jamselesaiState: jamselesai
        })
    }

    submit = async () => {
        const id = await localStorage.getItem('id')
        const { namakegiatan, jumlahpeserta, catatan, fasilitas, pdfFIle, selectedItems, tanggalMulai, tanggalSelesai, jamselesaiState, jamulaiState } = this.state;

        this.setState({
            isLoadingSubmit: true
        })
        const data = new FormData();
        data.append('nama_kegiatan', namakegiatan);
        data.append('jumlah_peserta', jumlahpeserta);
        data.append('tanggal_mulai', tanggalMulai);
        data.append('tanggal_selesai', tanggalSelesai);
        data.append('jam_mulai', jamulaiState);
        data.append('jam_selesai', jamselesaiState);
        data.append('pdf_file', pdfFIle);
        data.append('fasilitas', fasilitas);
        data.append('catatan', catatan);
        data.append('id_user', id);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        }
        axios.post('/api/createagenda', data, config)
            .then(res => {
                if (res.data.status === '1') {
                    toast.success("Berhasil Meminta Jadwal Ruangan", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.showsyarat(0)
                    this.agenda()
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
        const { isLoading, agendaNull, agendaku, show, selectedDateMulai, jamMulai, jamSelesai, selectedDateSelesai, items, selectedItems, isLoadingSubmit, showSyarat } = this.state;
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
                                                <button type="button" className="btn btn-info d-none d-lg-block m-l-15" onClick={() => this.show(1)}><i className="fa fa-plus-circle"></i> Buat Agenda</button>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        {agendaNull ? (
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Anda Belum Pernah Membuat Kegiatan di TCM Room</h5>
                                                    <p className="card-text">Klik tombol "Buat Agenda" disudut kanan atas pada blok ini untk membuat Kegiatan Anda di Sini</p>
                                                </div>
                                            </div>
                                        ) : (
                                                <div>
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Nama Kegiatan</th>
                                                                    <th>Tanggal</th>
                                                                    <th>Fasilitas</th>
                                                                    <th>Pengantar</th>
                                                                    <th>Status</th>
                                                                    <th>Catatan Operator</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {agendaku.map((data, key) =>
                                                                    <tr key={key}>
                                                                        <td>{key + 1}</td>
                                                                        <td>{data.nama_kegiatan}</td>
                                                                        <td>{moment(data.tanggal_mulai).format('LL')} - {moment(data.tanggal_selesai).format('LL')}</td>
                                                                        <td>{data.fasilitas}</td>
                                                                        <td><a href={"/Surat_Pengantar/" + data.pdf_file} target="_blank" className="btn btn-secondary"><i className="ti-book"></i>  Surat Pengantar</a> </td>
                                                                        <td>{data.status === "0" ? <span class="badge badge-warning">Menunggu Konfirmasi</span> : data.status === "1" ? <span class="badge badge-info">Terjadwal</span> : <span class="badge badge-danger">Tidak disetujui</span>}</td>
                                                                        <td style={{ width: 400 }}>{data.catatan_konfirmasi}</td>
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
                                        <label className="control-label">Nama Agenda / Kegiatan</label>
                                        <input type="text" className="form-control" name="namakegiatan" onChange={this.handleChange} placeholder="ex. Rapat Koordinasi Dinas Komunikasi dan Informatika Kota Singkawang" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Perkiraan Peserta (Jumlah Peserta)</label>
                                        <input type="text" className="form-control" name="jumlahpeserta" onChange={this.handleChange} placeholder="ex. 20" />
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        className="form-control"
                                                        margin="normal"
                                                        id="date-picker-dialog"
                                                        label="Rencana Tanggal Dimulai Pelaksanaan Kegiatan "
                                                        format="dd MMMM y"
                                                        minDate={new Date()}
                                                        value={selectedDateMulai}
                                                        onChange={this.handleDateChangeMulai}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        className="form-control"
                                                        margin="normal"
                                                        id="date-picker-dialog"
                                                        label="Rencana Tanggal Selesai Pelaksanaan Kegiatan "
                                                        format="dd MMMM y"
                                                        minDate={new Date()}
                                                        value={selectedDateSelesai}
                                                        onChange={this.handleDateChangeSelesai}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <Grid container justify="space-around">
                                                        <KeyboardTimePicker
                                                            margin="normal"
                                                            className="form-control"
                                                            id="time-picker"
                                                            ampm={false}
                                                            label="Jam Dimulai Kegiatan"
                                                            value={jamMulai}
                                                            onChange={this.onChangeTimeMulai}
                                                            KeyboardButtonProps={{
                                                                'aria-label': 'change time',
                                                            }}
                                                        />
                                                    </Grid>
                                                </MuiPickersUtilsProvider>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <Grid container justify="space-around">
                                                        <KeyboardTimePicker
                                                            margin="normal"
                                                            className="form-control"
                                                            id="time-picker"
                                                            ampm={false}
                                                            label="Jam Selesai Kegiatan"
                                                            value={jamSelesai}
                                                            onChange={this.onChangeTimeSelesai}
                                                            KeyboardButtonProps={{
                                                                'aria-label': 'change time',
                                                            }}
                                                        />
                                                    </Grid>
                                                </MuiPickersUtilsProvider>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label className="control-label">Fasilitas yang akan digunakan - klik icon (X) untuk menghapus</label>
                                                <MultiSelect
                                                    items={items}
                                                    selectedItems={selectedItems}
                                                    onChange={this.handleChangeItems}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Surat Pengantar (PDF) Maks 3MB</label>
                                        <input type="file" className="form-control" onChange={this.fileUploadValidation} />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Catatan Tambahan</label>
                                        <textarea className="form-control" onChange={this.handleChange} name="catatan"></textarea>
                                    </div>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                {isLoadingSubmit ? (
                                    <div>
                                        <ClockLoader
                                            css={override}
                                            size={30}
                                            //size={"150px"} this also works
                                            color={"#123abc"}
                                        />
                                        <p style={{ marginTop: 10, fontSize: 12 }}>Menyiapkan Permintaan Anda</p>
                                    </div>
                                ) : (<>
                                    <Button variant="secondary" onClick={() => this.show(0)}>
                                        Close
                                    </Button>
                                    {/* <button className="btn btn-info" onClick={() => this.antrian()}>
                                        Simpan
                                    </button> */}
                                    <button className="btn btn-info" onClick={() => this.showsyarat(1)}>
                                        Simpan
                                    </button>
                                </>)}

                            </Modal.Footer>
                        </Modal>


                        <Modal
                            show={showSyarat}
                            style={{ boxShadow:10 }}
                            onHide={() => this.showsyarat(0)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Buat Agenda</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <FroalaEditorView
                                        model={this.state.syaratketentuan}
                                    />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.showsyarat(0)}>
                                    Close
                                </Button>
                                <button className="btn btn-info" onClick={() => this.submit()}>
                                    Lanjutkan Pendaftaran
                                </button> */}
                                  {isLoadingSubmit ? (
                                    <div>
                                        <ClockLoader
                                            css={override}
                                            size={30}
                                            //size={"150px"} this also works
                                            color={"#123abc"}
                                        />
                                        <p style={{ marginTop: 10, fontSize: 12 }}>Menyiapkan Permintaan Anda</p>
                                    </div>
                                ) : (<>
                                    <Button variant="secondary" onClick={() => this.showsyarat(0)}>
                                        Close
                                    </Button>
                                    <button className="btn btn-info" onClick={() => this.antrian()}>
                                        Lanjutkan 
                                    </button>
                                </>)}

                            </Modal.Footer>
                        </Modal>
                    </div>)


                }


            </div>
        );
    }
}


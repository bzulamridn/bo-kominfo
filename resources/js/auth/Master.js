import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router';
import { css } from "@emotion/core";
import { BounceLoader, PacmanLoader } from "react-spinners";


const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
export default class Master extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoading: 'true',
            instansi: false,
            superAdmin: false,
            operator: false,
            akses: ''
        }
    }

    componentDidMount() {
        this.getSession()
    }

    getSession = async () => {
        const akses = await localStorage.getItem('akses');
        if (akses === null) {
            window.location.assign('/');
        } else {
            this.setState({
                akses
            })
            this.getData()
            this.akses()
        }
    }

    getData() {
        if (localStorage.getItem('akses') === 'instansi') {
            axios.get('/api/user/ins/' + localStorage.getItem('id'))
                .then(res => {
                    this.setState({
                        isLoading: false,
                        user: res.data.data
                    })
                })
        } else {
            axios.get('/api/user/op/' + localStorage.getItem('id'))
                .then(res => {
                    this.setState({
                        isLoading: false,
                        user: res.data.data
                    })
                })
        }

    }

    akses() {
        if (localStorage.getItem('akses') === 'instansi') {
            this.setState({
                instansi: true
            })
        }
    }

    logout = () => {
        axios.get('/api/logout')
            .then(res => {
                if (res.data.status === '1') {
                    this.clearData()
                }
            })
    }

    clearData = async () => {
        await localStorage.removeItem('akses')
        await localStorage.removeItem('id')
        window.location.assign("/");
    }


    render() {
        const { isLoading, user, akses } = this.state;
        return (
            <div>
                {
                    (() => {
                        if (isLoading === true) {
                            return (
                                <div className="sweet-loading" style={{ justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
                                    <PacmanLoader
                                        css={override}
                                        size={40}
                                        //size={"150px"} this also works
                                        color={"#123abc"}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <header className="topbar">
                                        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                                            <div className="navbar-header">
                                                <a className="navbar-brand" href="">
                                                    <center>
                                                        <b>
                                                           
                                                            <img src="https://nabungdibank.id/assets/img/logo-kominfo-white.png" alt="homepage" className="light-logo" width="45" /><span > TCM ROOM SKW  </span>
                                                        </b>
                                                    </center>
                                                </a>
                                            </div>

                                            <div className="navbar-collapse">
                                                <ul className="navbar-nav mr-auto">
                                                    <li className="nav-item"> <a className="nav-link nav-toggler d-block d-sm-none waves-effect waves-dark" ><i className="ti-menu"></i></a> </li>
                                                    <li className="nav-item"> <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" ><i className="icon-menu"></i></a> </li>
                                                </ul>

                                                <ul className="navbar-nav my-lg-0">

                                                    <li className="nav-item dropdown u-pro">
                                                        <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="hidden-md-down">{user.nama} &nbsp;<i className="fa fa-angle-down"></i></span> </a>
                                                        <div className="dropdown-menu dropdown-menu-right animated flipInY">
                                                            <button onClick={() => this.logout()} className="dropdown-item"><i className="fa fa-power-off"></i> Logout</button>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item right-side-toggle"> <a className="nav-link  waves-effect waves-light"><i className="ti-settings"></i></a></li>
                                                </ul>


                                            </div>
                                        </nav>
                                    </header>

                                    <aside className="left-sidebar">
                                        <div className="scroll-sidebar">
                                            <nav className="sidebar-nav">
                                                <ul id="sidebarnav">
                                                    <li> <Link to='/auth' className="waves-effect waves-dark" href="javascript:void(0);" aria-expanded="false"><i className="icon-speedometer"></i><span className="hide-menu">Dashboard</span></Link></li>
                                                    {(() => {
                                                        if (akses === 'instansi') {
                                                            return (
                                                                <>
                                                                    <li> <Link to="/agenda" href="javascript:void(0);" className="waves-effect waves-dark" aria-expanded="false"><i className="ti-calendar"></i><span className="hide-menu">Agenda Kegiatan</span></Link></li>
                                                                    <li> <Link to="/syaratketentuan" href="javascript:void(0);" className="waves-effect waves-dark" aria-expanded="false"><i className="ti-align-justify"></i><span className="hide-menu">Syarat & Ketentuan</span></Link></li>
                                                                </>
                                                            )
                                                        } else {
                                                            return (
                                                                <>
                                                                    <li> <Link to="/instansi" href="javascript:void(0);" className="waves-effect waves-dark" aria-expanded="false"><i className="ti-harddrives"></i><span className="hide-menu">Instansi</span></Link></li>
                                                                    <li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="ti-agenda"></i><span class="hide-menu">Booking</span></a>
                                                                        <ul aria-expanded="false" class="collapse">
                                                                            <li><Link to="/adminpending" href="form-layout.html">Baru / Pending</Link></li>
                                                                            <li><Link to="/adminsetuju" href="form-layout.html">Semua</Link></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li> <Link to="/syarat" href="javascript:void(0);" className="waves-effect waves-dark" aria-expanded="false"><i className="ti-align-justify"></i><span className="hide-menu">Syarat & Ketentuan</span></Link></li>
                                                                    <li> <Link to="/Fasilitas" href="javascript:void(0);" className="waves-effect waves-dark" aria-expanded="false"><i className="ti-panel"></i><span className="hide-menu">Fasilitas</span></Link></li>
                                                                    <li> <Link to="/operator" href="javascript:void(0);" className="waves-effect waves-dark" aria-expanded="false"><i className="ti-headphone"></i><span className="hide-menu">Operator</span></Link></li>
                                                                </>
                                                            )
                                                        }
                                                    })()}
                                                </ul>
                                            </nav>
                                        </div>
                                    </aside>
                                    <div className="page-wrapper">
                                        <div className="container-fluid">
                                            {this.props.children}
                                        </div>
                                    </div>
                                    <div className="right-sidebar">
                                        <div className="slimscrollright">
                                            <div className="rpanel-title"> Skin Panel <span><i className="ti-close right-side-toggle"></i></span> </div>
                                            <div className="r-panel-body">
                                                <ul id="themecolors" className="m-t-20">
                                                    <li><b>With Light sidebar</b></li>
                                                    <li><a data-skin="skin-default" className="default-theme">1</a></li>
                                                    <li><a data-skin="skin-green" className="green-theme">2</a></li>
                                                    <li><a data-skin="skin-red" className="red-theme">3</a></li>
                                                    <li><a data-skin="skin-blue" className="blue-theme">4</a></li>
                                                    <li><a data-skin="skin-purple" className="purple-theme">5</a></li>
                                                    <li><a data-skin="skin-megna" className="megna-theme working">6</a></li>
                                                    <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                                                    <li><a data-skin="skin-default-dark" className="default-dark-theme ">7</a></li>
                                                    <li><a data-skin="skin-green-dark" className="green-dark-theme">8</a></li>
                                                    <li><a data-skin="skin-red-dark" className="red-dark-theme">9</a></li>
                                                    <li><a data-skin="skin-blue-dark" className="blue-dark-theme">10</a></li>
                                                    <li><a data-skin="skin-purple-dark" className="purple-dark-theme">11</a></li>
                                                    <li><a data-skin="skin-megna-dark" className="megna-dark-theme ">12</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    })()
                }
            </div>
        );
    }
}


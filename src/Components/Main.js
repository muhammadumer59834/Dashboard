import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import zellbury from '../images/OrientLogo.png'
import gtech from '../images/logo.png'
import BlueBox from './BlueBox';
import Summary from "./Summary";
import {
    Link
} from "react-router-dom";
import Tabs from "./Tabs";
function Main() {
    // Login
    const navigate = useNavigate();

    const logout = () => {
        navigate('/Form');


    }


    // auto refresh start
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(s => !s);
    };

    const breek = (e) => {
        setTimeout(() => {
            window.location.reload();
        }, 60000);
    }

    if (show == true) {
        breek(3000)
    }
    if (show == false) {
        clearTimeout(breek)
        breek(3000000)
    }



    useEffect(() => {

        const sessonOver = () => {
            setTimeout(() => {
                navigate('/Form');
            }, 600000);
        }

        sessonOver()

    }, [])//when we use useEffect we put dependency as a second paramers
    return (
        <>



            <div className="skin-info dark-sidebar sidebar-mini pace-done sidebar-collapse">
                {/* {/* Site wrapper  */}
                <div className="wrapper">


                    <header className="main-header">
                        {/* Logo  */}
                        <a href="../index.html" className="logo">
                            {/* mini logo  */}
                            <div className="logo-mini">
                                <span className="light-logo"><img src={zellbury} width="100px" alt="logo" /></span>
                                <span className="dark-logo"><img src={zellbury} width="100px" alt="logo" /></span>
                            </div>
                            {/* logo */}
                            <div className="logo-lg">
                                <span className="light-logo"><img src={gtech} width="100px" alt="logo" /></span>
                                <span className="dark-logo"><img src={gtech} width="100px" alt="logo" /></span>
                            </div>
                        </a>
                        {/* Header Navbar  */}
                        <nav className="navbar navbar-static-top">
                            {/* Sidebar toggle button */}
                            <div className="alien">
                                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                                    <i className="ti-align-left"></i>
                                </a>
                            </div>
                            <div className="alien-2">
                                <a href="#" className="sidebar-toggle" role="button">
                                    <i className="ti-align-left"></i>
                                </a>
                            </div>

                            <div className="navbar-custom-menu r-side">
                                <ul className="nav navbar-nav" >
                                    {/* Messages  */}
                                    <li className="dropdown messages-menu" >
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">

                                        </a>
                                        <ul className="dropdown-menu animated bounceIn">
                                            <li>
                                                {/* inner menu: contains the actual data  */}
                                                <ul className="menu sm-scrol">
                                                    <li>
                                                        {/* start message  */}
                                                        <a href="#">
                                                            <div className="pull-left">
                                                                <img src="../../images/user2-160x160.jpg" className="rounded-circle"
                                                                    alt="User Image" />
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h4>
                                                                    Lorem Ipsum
                                                                    <small><i className="fa fa-clock-o"></i> 15 mins</small>
                                                                </h4>
                                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                    elit.</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="footer">
                                                <a href="#" className="bg-light">See all e-Mails</a>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Auto Refresh */}
                                    <li className="dropdown user user-menu">
                                        {/* <div className="auto">
                                            <div className="swi">
                                                <label className="switch" checked>
                                                    <input type="checkbox" onClick={handleClick} />
                                                    <span className="slider round"></span>
                                                </label>
                                                <label>Auto Refresh</label>
                                            </div>
                                            Microsoft Edge
                                        </div> */}
                                        <div className="auto">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" onClick={handleClick} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Auto Refresh</label>
                                            </div>
                                        </div>
                                    </li>
                                    {/* User Account*/}
                                    <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </a>
                                        <ul className="dropdown-menu animated flipInX">
                                            {/* User image  */}
                                            <li className="user-header bg-img"
                                                data-overlay="3">
                                                <div className="flexbox align-self-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </svg>
                                                    <h4 className="user-name align-self-center">
                                                        <span>Admin</span>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* Logout  */}
                                            <li className="user-body">
                                                <div className="p-10"><a onClick={logout}
                                                    className="btn btn-sm btn-rounded btn-danger">LogOut <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                    </svg></a></div>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* gtech logo */}
                                    <li className="dropdown user user-menu alien">

                                        <div style={{ marginTop: '20px', marginLeft: '10px' }}>
                                            <img src={gtech} width="70px" alt="logo" />
                                        </div>
                                    </li>
                                    {/* Control Sidebar Toggle Button  */}
                                    <li>
                                        <a href="#" data-toggle="control-sidebar"></a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </header>
                    <aside className="main-sidebar">
                        {/* sidebar */}
                        <section className="sidebar">
                            {/* sidebar menu */}
                            <ul className="sidebar-menu" data-widget="tree">
                                <li className="treeview">
                                    <a href="#">
                                        <i className="ti-dashboard"></i>
                                        <span>Dashboard</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </a>

                                    <ul className="treeview-menu">
                                        {/* pagee */}
                                        <li><Link className="ti-more" to="/Main"><i className="ti-more"></i>Main Dashboard   </Link></li>

                                    </ul>
                                </li>
                            </ul>
                        </section>
                    </aside>

                    <div className="content-wrapper">
                        <div className="container">
                            {/* Content Header (Page header)  */}


                            {/* Main content  */}

                            <section className="bg-white bott">
                                <div className="content-header">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-auto">
                                            <h3 className="page-title mar">Sales Dashboard</h3>
                                            <div className="d-inline-block align-items-center">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="f5">

                                    <div className="contaiin bot">
                                        <BlueBox />
                                    </div>
                                </div>

                            </section>
                            {/* Summary */}
                            <div className="cont">

                                <Summary />
                                {/* tabs */}

                                <Tabs />
                            </div>
                        </div>
                    </div>
                    {/* footer */}
                    <footer className="main-footer">
                        © 2022 - 2023 AL RAHIM RETAIL LTD Powered by G-Tech. All Rights Reserved.

                    </footer>
                    <div className="control-sidebar-bg"></div>
                </div>
            </div>
        </>
    )

}

export default Main
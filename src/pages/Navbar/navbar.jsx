/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
//import first image as logo from images folder inside assets
import logo from '../../assets/images/paisa-hi-paisa-hoga-without-border-black-removebg-preview.png';
import search from '../../assets/images/54481.png';
import './navbar.css';
import user from '../../assets/images/user.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";




const Navbar = () => {

    const [isLogin, setLogin] = useState();
    let navigate = useNavigate();



    useEffect(() => {
        setLogin(localStorage.getItem('login'));
        // console.log('this is login crend', isLogin);
    }, []);

    function logout() {
        localStorage.clear();
        window.location.reload();
    }
    function login(){
        navigate('/Login')
    }

    return (
        <nav className="navbar navbar-expand-sm custom_nav navbar-light sticky-top p-0">
            <div className="container-fluid">
                <a className="navbar-brand p-0" href="#">
                    <img src={logo} alt="Avatar Logo" style={{ width: '150px' }} className="rounded-pill" />
                </a>
                {/* <div className="searchContainer">
                    <input placeholder="Enter search text" className="custom_input" />
                    <img src={search} className="search" height="20px" alt="Search" />
                </div> */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">

                    <ul className="navbar-nav px-4">
                        <li className="nav-item">
                            <Link className="nav-link custom_link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom_link" to="/news">News </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom_link" to="/aboutUs">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom_link" to="/contactUs">Connect with us</Link>
                        </li>
                        <li className="nav-item" style={{ position: 'relative' }}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <img src={user} alt="user" style={{ width: '25px' }} />
                            </a>
                            <ul className="dropdown-menu custom_menu">
                                {isLogin ? (
                                    <>
                                        <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Upgrade</a></li>
                                        <li onClick={logout}><a className="dropdown-item" href="#">Log Out</a></li>
                                    </>
                                ) : (
                                    <li onClick={login}><a className="dropdown-item" href="#">Log In</a></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
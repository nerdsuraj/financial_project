/* eslint-disable jsx-a11y/anchor-is-valid */

//import first image as logo from images folder inside assets
import logo from '../../assets/images/computer-icons-chart-analytics-financial-web-analytics-icon.jpg';
import search from '../../assets/images/54481.png';
import './navbar.css';
import user from '../../assets/images/user.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Avatar Logo" style={{ width: '40px' }} className="rounded-pill" />
                </a>
                <div className="searchContainer">
                <input placeholder="Enter search text" className="custom_input"/>
                <img src={search} className="search" height="20px" alt="Search" />
                </div>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                   
                    <ul className="navbar-nav px-4">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item" style={{position:'relative'}}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <img src={user} alt="user" style={{width:'25px'}}/>
                            </a>
                            <ul className="dropdown-menu menu">
                                <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                <li><a className="dropdown-item" href="#">Upgrade</a></li>
                                <li><a className="dropdown-item" href="#">Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
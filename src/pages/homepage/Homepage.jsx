/* eslint-disable jsx-a11y/anchor-is-valid */
// import Navbar from "../Navbar/navbar";
import "./homepage.css";
import avatar from "../../../src/logo.svg";
const Homepage = () => {
    return (
        <div className="homebody">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={avatar} alt="Avatar Logo" style={{ width: '40px' }} className="rounded-pill" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bulletin text-center">
                <div className="bulletin-content">
                    <p className="text-secondary">WELCOME TO BULLETIN</p>
                    <p className="fs-3">Craft narratives ✍️ that ignite <span className="text-danger">inspiration</span> 💡,<span className="text-danger">knowledge</span> 📙, and <span className="text-danger">entertainment</span> 🎬</p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
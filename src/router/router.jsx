/* eslint-disable no-unused-vars */
import Signup from "../pages/signup/signup";
import Login from "../pages/signin/signin";
import Navbar from "../pages/Navbar/navbar";
import Homepage from "../pages/homepage/Homepage";
import AboutUs from "../pages/AboutUs/aboutus";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function reactRouter() {
    return (
            <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
            </Router>
        </div>
)}

export default reactRouter;
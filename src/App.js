/* eslint-disable no-unused-vars */
import './App.css';
// import ReactRouter from './router/router';
import Signup from "../src/pages/signup/signup";
import Login from "../src/pages/signin/signin";
import Navbar from "../src/pages/Navbar/navbar";
import Homepage from "../src/pages/homepage/Homepage";
import AboutUs from "../src/pages/AboutUs/aboutus";
import Productpage from "../src/pages/productPage/product";
import ContactUs from "../src/pages/ContactUs/contactus";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    {/* <ReactRouter/> */}
    <Router>
                <Routes>
                    <Route path="/" element={<Productpage/>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/news" element={<Homepage />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                </Routes>
            </Router>
    </div>
  );
}

export default App;

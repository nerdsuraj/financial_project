/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../Navbar/navbar";
import { useState, useEffect } from "react";
import "./homepage.css";
import Courses from "../Courses";
import Webinar from "../Webinar";
import Footer from "../Footer/footer";
import { BusinessService } from "../../services/businessServices";
import Defaultcards from "../Defaultcards/DefaultCards";
import Carousel from "../Carousel";

const Homepage = () => {
 
    return (
        <>
            <Navbar />
            <Carousel/>
            <Defaultcards />
            {/* <Courses />
            <Webinar /> */}
            <div className="container-lg py-2">
                <hr style={{ "color": "red" }}></hr>
            </div>
            <Footer />
        </>
    )
}

export default Homepage;
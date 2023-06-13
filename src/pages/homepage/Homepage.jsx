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

const Homepage = () => {
 
    return (
        <>
            <Navbar />
            <div>
                {/* <div className="bulletin text-center">
                    <div className="bulletin-content">
                        <p className="text-secondary">WELCOME TO BULLETIN</p>
                        <p className="fs-3">Craft narratives ✍️ that ignite <span className="text-danger">inspiration</span> 💡,<span className="text-danger">knowledge</span> 📙, and <span className="text-danger">entertainment</span> 🎬</p>
                    </div>
                </div> */}
            </div>
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
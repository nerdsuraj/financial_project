/* eslint-disable no-unused-vars */
import React from "react";
import "./aboutus.css"
import suraj from "../../assets/images/suraj.jpeg"
import Akshay from "../../assets/images/akshay.jpeg"
import nikhil from "../../assets/images/nikhil.jpg"
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import ProfileCards from "../ProfileCards";
import Nikhil from "../../assets/images/nikhil.jpg"


const AboutUs = () => {

    return (
        <>
            <Navbar/>
            <div className="team_wrapper">
                <h1 className="team_tag">Meet our young and enthusiastic team of developers & creators</h1>
            </div>
            <div className="profileWrapper">
                <ProfileCards image_link={Nikhil} 
                name="Nikhil Mahadik" 
                role="Frontend developer" 
                description="Give him design and he will write code for you that's all about him. Sports fanatic, music lover 
                            and traveller are few words which describe him. His name means 'complete without boundaries' and he is just the same.
                            Unique thing about him is that he always managed to get perfect percentage in SSC, HSC & graduation (whole numbers).
                            He is definitely important part of our team."/> 
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs; 
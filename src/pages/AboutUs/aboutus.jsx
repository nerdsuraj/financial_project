/* eslint-disable no-unused-vars */
import React from "react";
import "./aboutus.css"
import suraj from "../../assets/images/suraj.jpeg"
import Akshay from "../../assets/images/akshay.jpeg"
import nikhil from "../../assets/images/nikhil.jpeg"


const AboutUs = () => {

    return (
        <div className="page-container">
            <div className="connect-message">
                <h2>Connect with us!</h2>
            </div>
            <div className="about-us">
                <div className="section">
                    <div className="vertical-line"></div>
                    <div className="content">
                        <div className="image-container">
                            <img src={Akshay} alt="Akshay" className="profile-image" />
                        </div>
                        <h2>Akshay Rewadkar</h2>
                        <p>Some details about Akshay Rewadkar:</p>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam facere soluta, laboriosam deserunt autem sapiente qui pariatur ipsa nobis odit consequatur iure quibusdam cum quo in, neque repudiandae! Excepturi, earum amet.</h4>
                        <h3>Skills:</h3>
                        <ul>
                            <li>python</li>
                            <li>Web Scraping</li>
                            <li>Stock Manager</li>
                        </ul>
                        <button className="connect-button">Connect with Akshay</button>
                    </div>
                </div>
                <div className="section">
                    <div className="vertical-line"></div>
                    <div className="content">
                        <div className="image-container">
                            <img src={nikhil} alt="Nikhil" className="profile-image" />
                        </div>
                        <h2>Nikhil Mahadik</h2>
                        <p>Some details about Nikhil Mahadik:</p>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam facere soluta, laboriosam deserunt autem sapiente qui pariatur ipsa nobis odit consequatur iure quibusdam cum quo in, neque repudiandae! Excepturi, earum amet.</h4>
                        <h3>Skills:</h3>
                        <ul>
                            <li>Angular</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                        <button className="connect-button">Connect with Nikhil</button>
                    </div>
                </div>
                <div className="section">
                    <div className="vertical-line"></div>
                    <div className="content">
                        <div className="image-container">
                            <img src={suraj} alt="Suraj" className="profile-image" />
                        </div>
                        <h2>Suraj Kumar</h2>
                        <p>Some details about Suraj Kumar:</p>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam facere soluta, laboriosam deserunt autem sapiente qui pariatur ipsa nobis odit consequatur iure quibusdam cum quo in, neque repudiandae! Excepturi, earum amet.</h4>
                        <h3>Skills:</h3>
                        <ul>
                            <li>MEAN Stack Developer</li>
                            <li>React Developer</li>
                            <li>Full stack</li>
                        </ul>
                        <button className="connect-button">Connect with Suraj</button>
                    </div>
                </div>
            </div>
        </div>)

}

export default AboutUs; 
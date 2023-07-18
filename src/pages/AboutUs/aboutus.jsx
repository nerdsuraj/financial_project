/* eslint-disable no-unused-vars */
import React from "react";
import "./aboutus.css"
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import ProfileCards from "../ProfileCards";
import Nikhil from "../../assets/images/nikhil.jpg"
import Sooraj from "../../assets/images/sooraj.jpeg"
import aaki from "../../assets/images/aaki.jpeg"


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
            <div className="profileWrapper">
                <ProfileCards image_link={Sooraj} 
                name="Suraj Kumar" 
                role="Full Stack developer {angular & React}" 
                description="A full stack developer who is well-versed in both MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks is like a movie and series enthusiast who can seamlessly switch between genres, bringing the best of both worlds to the development realm.
                This developer is not only skilled in handling the back-end and front-end aspects of web development but also has a knack for choosing the right entertainment options. They are like a casting director, effortlessly assembling the perfect combination of technologies to create captivating and interactive web applications.
                Just as they appreciate a good movie or series, this full stack developer knows how to captivate users with engaging interfaces and smooth user experiences. They have the power to write code that tells a story and leaves users wanting more.
                Now, let's add a funny joke to lighten the mood:
                Why did the developer go broke?
                Because they couldn't find a bug in their budget"/> 
            </div>
            <div className="profileWrapper">
                <ProfileCards image_link={aaki} 
                name="Akshay Rewadkar" 
                role="Python developer"
                description="A Python developer with 2 years of experience, my expertise lies in web scraping, data mining, data science, NLP, and search algorithm maintenance. I also have a solid understanding of Git, CI/CD pipelines, Docker, and Kubernetes"/> 
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs; 
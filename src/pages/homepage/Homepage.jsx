/* eslint-disable jsx-a11y/no-distracting-elements */
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

    let [margueeData, setMargueeData] = useState([]);

    useEffect(() => {
        get_marguee_data();
    }, []);

    const get_marguee_data = async () => {
        try {
            const response = await BusinessService().getMarqueeData();
            console.log('response from the marguee list', response);
            if (response.status === 200) {
                console.log('response.data', response.data);
                setMargueeData(response.data);

            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }

    }
    console.log('margueeData', margueeData);


    return (
        <>
            <Navbar />
            <div className="marquee-container">
                <marquee className="marquee-content">
                    Today's Updated: 
                    {margueeData.map((item, index) => (
                        <span key={index}>
                            {item.name}: {item.ltp} {item.up_or_down} {item.percentage}%
                            {index !== margueeData.length - 1 && ' | '}
                        </span>
                    ))}
                </marquee>
            </div>
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
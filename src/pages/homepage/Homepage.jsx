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
import Carousel from "../Carousel";

const Homepage = () => {
    let [margueeData, setMargueeData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        get_marguee_data();
    }, []);

    const get_marguee_data = async () => {
        try {
            const response = await BusinessService().getMarqueeData();
            if (response.status === 200) {
                setMargueeData(response.data);

            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }

    }


    return (
        <>
            <Navbar  onSearchResults={setSearchResults} setLoading={setIsLoading} />
            {/* <div className="marquee-container"> */}
                <marquee className="marquee-content">
                    <span className="market-label">Today's Market:&nbsp;&nbsp;&nbsp; </span>
                    {margueeData.map((item, index) => (
                        <span key={index}>
                            {item.name}*: {item.ltp} {item.percentage}% {item.up_or_down === 'down' ? <span className="down">🔻</span> : <span className="up">🔺</span>} 
                            {index !== margueeData.length - 1 && ' | '}
                        </span>
                    ))}
                </marquee>
            {/* </div> */}
            <Defaultcards searchResults={searchResults} isLoading={isLoading} />
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
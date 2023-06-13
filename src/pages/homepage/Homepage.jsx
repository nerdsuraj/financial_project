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
    //define a variable for store array data
    // const [newsData, setNewsData] = useState([]);

    // useEffect(() => {
    //     get_news();
    // }, []);

    // const get_news = async () => {
    //     let obj = {};
    //     let isLogin = localStorage.getItem('login');
    //     console.log('isLogin', isLogin);
    //     if (isLogin === 'true') {
    //         const email = localStorage.getItem('email');
    //         obj = {
    //             "email": email
    //         }
    //     }else{
    //         obj = {
    //             "email": "suraj"
    //         }
    //     }
    //     try {
    //         console.log('obj', obj);
    //         const response = await BusinessService().getDataByPost(obj);
    //         console.log('response', response);
    //         if (response.status === 200) {
    //             setNewsData(response.data);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching news:', error);
    //     }
    // }
    // console.log('newsData:', newsData.results);

    return (
        <>
            <Navbar />
            <div>
                <div className="bulletin text-center">
                    <div className="bulletin-content">
                        <p className="text-secondary">WELCOME TO BULLETIN</p>
                        <p className="fs-3">Craft narratives ✍️ that ignite <span className="text-danger">inspiration</span> 💡,<span className="text-danger">knowledge</span> 📙, and <span className="text-danger">entertainment</span> 🎬</p>
                    </div>
                </div>
            </div>
            <Defaultcards />
            {/* <Courses />
            <Webinar /> */}
            <div className="container-lg py-2">
                <hr style={{ "color": "red" }}></hr>
                {/* <Footer/> */}
            </div>
            <Footer />
        </>
    )
}

export default Homepage;
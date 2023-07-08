/* eslint-disable no-unused-vars */
import Newscard from "../Newscard";
import { useEffect, useState } from "react";
import { BusinessService } from "../../services/businessServices";
import { Link } from "react-router-dom"
import "./defaultCards.css";
import Shimmer from "../Shimmer";

const Defaultcards = () => {
    const [cards, setCards] = useState([]);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const pageSize = 12; // Number of cards to show per page
    const [currentPage, setCurrentPage] = useState(1); // Current page number

    // Calculate the indexes for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Get the cards for the current page
    const currentCards = cards.slice(startIndex, endIndex);

    useEffect(() => {
        get_news();
    }, []);

    const get_news = async () => {
        let obj = {};
        let isLogin = localStorage.getItem('login');
        setIsUserLoggedIn(isLogin === 'true');
        if (isLogin === 'true') {
            const email = localStorage.getItem('email');
            obj = {
                "email": email
            }
        } else {
            obj = {
                "email": "suraj"
            }
        }
        try {
            console.log('obj', obj);
            const response = await BusinessService().getDataByPost(obj);
            console.log('response', response);
            if (response.status === 200) {
                setCards(response.data.results);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    console.log('newsData:', cards.results);

    return (
        <div className="container-lg py-2">
            <h2 className="display-6">Check following curated news based on your interest</h2>
            {cards.length!==0 ? <div className="card-container">
                {
                    currentCards.map((card, index) => {
                        return (
                            <Newscard key={index} {...card} />
                        )
                    })
                }
            </div> : ""}
            {isUserLoggedIn && (
                <div className="pagination-container">
                    {currentPage > 1 && (
                        <button className="pagination-button" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                    )}
                    {endIndex < cards.length && (
                        <button className="pagination-button" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                    )}
                </div>
            )}
            <div className="container-lg mt-3 text-end">
                {!isUserLoggedIn && (
                    <Link to="/signup">
                        <button className="btn btn btn-danger">Sign Up For More News...</button>
                    </Link>
                )}
            </div>
        </div>
    )
}
export default Defaultcards;
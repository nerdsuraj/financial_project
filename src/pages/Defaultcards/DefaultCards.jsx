/* eslint-disable no-unused-vars */
import Newscard from "../Newscard";
import { useEffect, useState } from "react";
import { BusinessService } from "../../services/businessServices";
import { Link } from "react-router-dom"
import "./defaultCards.css";
import Shimmer from "../Shimmer";

const Defaultcards = ({ searchResults, isLoading }) => {
    const [cards, setCards] = useState([]);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const pageSize = 12; // Number of cards to show per page


    useEffect(() => {
        if (searchResults && searchResults.length > 0) {
            setCards(searchResults); // Set cards to search results
        } else {
            get_news();
        }
    }, [searchResults]);


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
            const response = await BusinessService().getDataByPost(obj);
            console.log('response', response);
            if (response.status === 200) {
                setCards(response.data.results);
            }
            else {
                setCards([]);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            setCards([]);

        }

    }

    // Calculate the indexes for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentCards = cards.slice(startIndex, endIndex);


    return (
        <div className="container-lg py-2">
            <h2 className="display-6" style={{ textDecoration: 'underline', textDecorationColor: '#4287f5' }}>Stay Ahead: Top Financial News Curated Just for You</h2>
            <br />
            {isLoading ? (
                <Shimmer />
            ) : (
                cards.length !== 0 ? (
                    <div className="card-container-wrapper">
                        {currentCards.map((card, index) => (
                            <Newscard key={index} {...card} />
                        ))}
                    </div>
                ) : (
                    <div>No data found</div>
                )
            )}
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
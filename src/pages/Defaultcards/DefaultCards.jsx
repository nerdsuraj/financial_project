import Newscard from "../Newscard";
import { useEffect, useState } from "react";
import { BusinessService } from "../../services/businessServices";
import {Link} from "react-router-dom"

const Defaultcards = () => {
    //state variable to store t
    const [cards, setCards] = useState([]);
    const get_news = async () => {
        const obj = {
            "email": "soorajkrpandit@gmail.com",
            "password": "Suraj@12345"
        }
        try {
            const response = await BusinessService().getDataByPost(obj);
            console.log('defaultcards', response?.data?.results.slice(0, 12));
            setCards(response?.data?.results.slice(0, 12));

        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    useEffect(() => {
        get_news();
    }, [])

    return (
        <div className="container-lg py-2">
            <h2 className="display-6">Check following curated news based on your interest</h2>
            <div className="card-container">
                {
                    cards.map((card) => {
                        return (
                            <Newscard {...card} />
                        )
                    })
                }
            </div>
            <div className= "container-lg mt-3 text-end">
            <Link to="/signup" >
                <button className="btn btn-sm btn-warning">Sign up for more news...</button>
            </Link>
            </div>
        </div>
    )
}
export default Defaultcards;
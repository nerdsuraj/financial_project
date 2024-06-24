import dummy_img from '../assets/images/dummy-post-square-1-1.jpg';
import { Link } from 'react-router-dom';
import alternateImage from "../assets/images/alternateImage.jpeg";

const Newscard = ({ title, url, sub_title, img_url, inserted_datetime }) => {
    return (
        <Link to={url} target="_blank" rel="noopener noreferrer" className="card-wrapper text-decoration-none">
            <div className="img-container">
                <img className="newsImg" src={img_url ? img_url : alternateImage} alt="news_img" width="100%" />
            </div>
            <div className="description_box px-3">
                <div className="text-secondary">{inserted_datetime}</div>
                <div className="text-dark fw-bold">{title}</div>
                <div className="text-secondary description">{sub_title}</div>
            </div>
            <hr></hr>
        </Link>
    )
}

export default Newscard;

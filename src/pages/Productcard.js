import dummy_img from '../assets/images/dummy-post-square-1-1.jpg';
import { Link } from 'react-router-dom';


const Productcard = ({ image_link, title, price, affiliate_link,rating }) => {
    return (
        <Link to={affiliate_link} target="_blank" rel="noopener noreferrer" className="newscard text-decoration-none">
            <div className="img-wrapper">
            {image_link!=="" ? (<img src={image_link} width="100%" height="100%" alt={title} />)
            : (<img src={dummy_img} width="100%" height="100%" alt="dummyimage" />)}
            </div>
            <div className="text-white title_1">{title}</div>
            <div className="text-white">₹ {price}</div>
            <div className="text-white">Rating : {rating}/5</div>      
        </Link>
    )
}

export default Productcard;
import dummy_img from '../assets/images/dummy-post-square-1-1.jpg';
import { Link } from 'react-router-dom';

const Newscard = ({ title, url, description, img_url, trainer, avgRating }) => {
    return (
        <Link to={url} target="_blank" rel="noopener noreferrer" className="newscard text-decoration-none">
            <div>
            {img_url!=="" ? (<img src={img_url} width="100%" height="100%" alt="adimg" />)
            : (<img src={dummy_img} width="100%" height="100%" alt="dummyimage" />)}
            </div>
            <div className="text-dark">{title}</div>
        </Link>
    )
}

export default Newscard;

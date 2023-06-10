import React from 'react';

const Newscard = ({ title, description, img_url, trainer, avgRating,url }) => {

    const handleClick = () => {
        window.open(url, '_blank');
    }


    return (
        <div className="newscard">
            <img src={img_url} width="100%"  alt="adimg" onClick={handleClick} /><br/>
            <span>{title}</span><br />
            <span>{description}</span><br />
            <span>Trainer: {trainer}</span><br />
            <span>Rating : {avgRating}</span>
        </div>
    )
}

export default Newscard;



const Newscard = ({ title, description, img_url, trainer, avgRating }) => {
    return (
        <div className="newscard">
            <img src={img_url} width="100%"  alt="adimg" /><br/>
            <span>{title}</span><br />
            <span>{description}</span><br />
            <span>Trainer: {trainer}</span><br />
            <span>Rating : {avgRating}</span>
        </div>
    )
}

export default Newscard;

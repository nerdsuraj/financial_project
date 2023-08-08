import img1 from "../assets/images/pexels-essow-k-936722.jpg";
import img2 from "../assets/images/pexels-helena-lopes-3688760.jpg";
import img3 from "../assets/images/pexels-tima-miroshnichenko-7567443.jpg";



const Carousel = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{top:"-7px"}}>

  {/* Indicators/dots  */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner custom_carousel">
    <div className="carousel-item active">
      <img src={img1} alt="Los Angeles" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src={img2} alt="Chicago" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src={img3} alt="New York" className="d-block w-100"/>
    </div>
  </div>

  {/* <!-- Left and right controls/icons --> */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
  )
}

export default Carousel
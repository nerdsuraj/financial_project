/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../Navbar/navbar";
import Newscard from "../Newscard";
import "./homepage.css";
import Courses from "../Courses";
import Webinar from "../Webinar";

const Homepage = () => {
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
            <Courses/>
            <Webinar/>
        </>
    )
}

export default Homepage;
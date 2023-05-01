import { webinarObj } from "../config";
import Newscard from "./Newscard";

const Webinar = () => {
    return(
        <div className="container-lg py-2">
                <h2 className="display-6">Free Webinars</h2>
                <hr></hr>
                <div className="card-container">
                {
                    webinarObj.map((item) => {
                        return (
                            <Newscard
                               {...item}
                            />
                        )
                    }
                )}
                </div>
            </div>
    )
}

export default Webinar;
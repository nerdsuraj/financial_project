import Newscard from "./Newscard";
import { stockObj } from "../config"

const Courses = () => {
    return(
        <div className="container-lg py-2">
                <h2 className="display-6">Free Stock market courses</h2>
                <hr></hr>
                <div className="card-container">
                {
                    stockObj.map((item) => {
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

export default Courses;
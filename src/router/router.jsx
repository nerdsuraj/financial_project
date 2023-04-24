import Signup from "../pages/signup/signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function reactRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </div>);
}

export default reactRouter;
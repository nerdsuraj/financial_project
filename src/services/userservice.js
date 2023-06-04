// eslint-disable-next-line no-unused-vars
import axios from "axios";

export const UserSignIn = (Obj) => {
    try {
        return axios.post("http://206.189.130.235:5050/login", Obj)
    } catch (err) {
    }
}

export const UserSignUp = (Obj) => {
    try {
        return axios.post("http://206.189.130.235:5050/signup", Obj);
    } catch (err) {
        console.log(err);
    }
}
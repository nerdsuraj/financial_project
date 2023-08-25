// eslint-disable-next-line no-unused-vars
import axios from "axios";

export const UserSignIn = (Obj) => {
    try {
        return axios.post("https://api.paisahipaisahoga.in//login", Obj)
    } catch (err) {
    }
}

export const UserSignUp = (Obj) => {
    try {
        return axios.post("https://api.paisahipaisahoga.in//signup", Obj);
    } catch (err) {
        console.log(err);
    }
}
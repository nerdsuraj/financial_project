// eslint-disable-next-line no-unused-vars
import axios from "axios";

export function BusinessService() {
    const getDataByPost = (obj) => {
        return axios.post("http://206.189.130.235:5050/get_news", obj)
    }

    const saveFileToS3 = (apiPath, formData) => {
        console.log("formData", formData);
        // return axios.post("",Obj)
    }

    const getMarqueeData = () => {
        return axios.get("http://206.189.130.235:5050/get_marquee_data");
    }

    const get_amazon_products = (obj) => {
        console.log("object to send the data to the api", obj);
        return axios.post("http://206.189.130.235:5050/get_amazon_products",obj)

    }

    return { getDataByPost, saveFileToS3 , getMarqueeData ,get_amazon_products }
}
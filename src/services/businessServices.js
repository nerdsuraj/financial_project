// eslint-disable-next-line no-unused-vars
import axios from "axios";

export function BusinessService() {
    const getDataByPost = (obj) => {
        return axios.post("http://206.189.130.235:5050/get_news", obj)
    }

    const saveFileToS3 = (apiPath, formData) => {
        console.log("formData", formData);
    }

    const getMarqueeData = () => {
        return axios.get("http://206.189.130.235:5050/get_marquee_data");
    }

    const get_amazon_products = (obj) => {
        return axios.post("http://206.189.130.235:5050/get_amazon_products",obj)

    }

    const whatsapp_number = (obj) => {
        console.log("object to whatsapp number!!!", obj);
        return axios.post("http://206.189.130.235:5050/store_mobile_number",obj);
    }

    const contact_data = (obj) => {
        console.log("object to contact data!!!", obj);
        return axios.post("http://206.189.130.235:5050/contact_us",obj);
    }

    return { getDataByPost, saveFileToS3 , getMarqueeData ,get_amazon_products,whatsapp_number,contact_data }
}
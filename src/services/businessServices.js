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

    return { getDataByPost, saveFileToS3 }
}
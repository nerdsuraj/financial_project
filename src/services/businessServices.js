

export function BusinessService() {
    const getDataByPost = (apiPath, formData) =>{
        console.log("formData",formData);
        // return axios.post("",Obj)
    }
    
    const saveFileToS3 = (apiPath, formData) =>{
        console.log("formData",formData);
        // return axios.post("",Obj)
    }
    
    return {getDataByPost,saveFileToS3}
}
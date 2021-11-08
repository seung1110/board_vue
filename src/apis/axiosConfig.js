import axios from "axios"

axios.defaults.baseURL="http://localhost:80"


function addAuthHeader(authToken){
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

function removeAuthHeader(){
    delete  axios.defaults.headers.common['Authorization'];
}


export default {
    addAuthHeader,
    removeAuthHeader
}
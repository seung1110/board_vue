import axios from "axios";

function login(mid,mpassword){
    return axios.post("/member/login2",{
        mid,mpassword
    });
}

export default {
    login
}
import axios from "axios";

function boardList(pageNo = 1){
    return axios.get("/board/list",{params:{pageNo}});
}

export default {
    boardList
}
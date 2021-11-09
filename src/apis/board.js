import axios from "axios";

function boardList(pageNo = 1){
    return axios.get("/board/list",{params:{pageNo}});
}

function getBoard(bno,hit){
    return axios.get(`/board/${bno}`,{params : {hit}});
}

export default {
    boardList,
    getBoard
}
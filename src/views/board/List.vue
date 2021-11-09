<template>
  <div>
    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th class="text-left">번호</th>
            <th class="text-left">제목</th>
            <th class="text-center">작성자</th>
            <th class="text-center">작성일</th>
            <th class="text-center">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="board in boardList" :key="board.bno" @click="readBoard(board.bno)">
            <td class="text-left">{{ board.bno }}</td>
            <td>{{ board.btitle }}</td>
            <td class="text-center">{{ board.mid }}</td>
            <td class="text-center">{{ new Date(board.bdate).toLocaleString() }}</td>
            <td class="text-center">{{ board.bhitcount }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider />
    <div class = "mt-2 text-center">
      <v-btn color="primary" class="mr-1" outlined @click="changePage(1)">처음</v-btn>
      <v-btn v-if="beforeFlag" color="success" class="mr-1" outlined @click="changePage(pager['startPageNo']-1)">이전</v-btn>
      <v-btn color="secondary" :outlined="i !== pager.pageNo" v-for="i in idexList" 
        :key="i" class="mr-1 " @click="changePage(i)">
        {{i}}
      </v-btn>
      <v-btn  v-if="nextFlag" color="success" class="mr-1" outlined @click="changePage(pager['endPageNo']+1)">다음</v-btn>
      <v-btn color="primary" @click="changePage(pager['totalPageNo'])" outlined>마지막</v-btn>
    </div>
    <div class="text-right">
      <v-btn color="primary">작성</v-btn>
    </div>
  </div>
</template>

<script>
import board from "@/apis/board";
export default {
  data: () => ({
    boardList: [],
    pager : null,
    idexList : null,
    nextFlag : true,
    beforeFlag : true
  }),
  methods: {
    async getList(pageNo) {
      try {
        const response = await board.boardList(pageNo);
        this.boardList = response.data.boardList;
        this.pager = response.data.pager;
        this.idexList = this.createArray(this.pager['startPageNo'],this.pager['endPageNo']);

        if(this.pager['groupNo'] == 1){
          this.beforeFlag = false;
        }else{
          this.beforeFlag = true;
        }
        if(this.pager['groupNo'] == this.pager['totalGroupNo']){
          this.nextFlag = false;
        }else{
          this.nextFlag = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    changePage(pageNo){
      this.$router.push(`/board/list?pageNo=${pageNo}`).catch(()=>{});
    },
    createArray(startNo,endNo){
      let result = [];
      for(let i = startNo; i <= endNo; i++){
        result.push(i);
      }
      return result;
    },
    readBoard(bno){
      this.$router.push(`/board/detail?bno=${bno}`);
    }
  },
  created() {
    this.getList(this.$route.query.pageNo);
  },
  watch : {
    $route(to){
      if(to.query.pageNo){
        this.getList(to.query.pageNo);
      }else{
        this.getList(1);
      }
    }
  }
};
</script>

<style></style>

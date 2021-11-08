<template>
  <v-simple-table>
    <template>
      <thead>
        <tr>
          <th class="text-cneter">번호</th>
          <th class="text-left">제목</th>
          <th class="text-left">작성자</th>
          <th class="text-left">작성일</th>
          <th class="text-left">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boardList" :key="board.bno">
          <td>{{ board.bno }}</td>
          <td>{{ board.btitle }}</td>
          <td>{{ board.mid }}</td>
          <td>{{ new Date(board.bdate).toLocaleString()}}</td>
          <td>{{ board.bhitcount }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import board from '@/apis/board'
export default {
  data: () => ({
    boardList : []
  }),
  methods : {
    async getList(pageNo){
      try{
        const response = await board.boardList(pageNo);
        console.log(response.data.boardList)
        this.boardList = response.data.boardList;
      }catch(error){
        console.log(error);
      }
    }
  },
  created(){
    this.getList(this.$route.query.pageNo);
  }
};
</script>

<style></style>

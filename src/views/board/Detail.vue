<template>
  <v-card v-if="board != null">
    <v-card-title>
      <span class="text-sm-body-1 font-weight-light ml-5">[{{ board.bno }}]</span>
      <span class="text-h6 ml-2"> {{ board.btitle }}</span>
    </v-card-title>
    <v-card-text class="text-right pa-0 float-left">
      <span class="mr-4">작성자 : {{ board.mid }}</span>
      <span>작성일 : {{ new Date(board.bdate).toLocaleDateString() }}</span>
    </v-card-text>
    <v-divider />
    <v-card-text class="ma-5 text-sm-body-1 black--text">
      {{ board.bcontent }}
    </v-card-text>
    <v-card-text class="ma-5" v-if="board.battachoname">첨부파일 : {{ board.battachoname }} </v-card-text>
    <v-footer align-self-end>
      <v-card-text class="text-right pa-0">
        <v-btn color="info" class="mr-1" medium to="/board/list">목록</v-btn>
        <div class="d-inline" v-if="board.mid === $store.state.userId">
          <v-btn color="success" class="mr-1" medium>수정</v-btn>
          <v-btn color="red" class="mr-1" medium dark>삭제</v-btn>
        </div>
      </v-card-text>
    </v-footer>
  </v-card>
</template>

<script>
import board from "@/apis/board";
export default {
  data: () => ({
    board: null,
  }),
  methods: {
    async getBoard(bno, hit) {
      try {
        const response = await board.getBoard(bno, hit);
        console.log(response.data);
        this.board = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    if (this.$route.query.bno) this.getBoard(this.$route.query.bno, true);
  },
};
</script>

<style></style>

<template>
  <div justify-center class="mt-5">
    <v-row align="center" justify="center"> 로그인 </v-row>
    <v-row v-if="errorFlag"> <v-col class="text-center red--text">잘못된 아이디 또는 비밀번호입니다.</v-col></v-row>
    <v-row align="center" justify="center">
      <v-form @submit.prevent="login">
        <v-text-field label="ID" hide-details="auto" v-model="mid"></v-text-field>
        <v-text-field label="Password" type="password" v-model="mpassword"></v-text-field>
        <v-btn type="submit" color="primary">로그인</v-btn>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import user from "@/apis/user";
export default {
  data: () => ({
    mid: "",
    mpassword: "",
    errorFlag: false,
  }),
  methods: {
    async login() {
        try{
            const response = await user.login(this.mid, this.mpassword);
            this.$store.dispatch("saveAuth",{userId : response.data.mid, authToken : response.data.jwt});
        }catch(error){
            if(error.message.includes("401")){
                this.errorFlag = true;
            }
        }
    },
  },
};
</script>

<style></style>

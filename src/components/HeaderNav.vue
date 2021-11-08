<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div v-if="$store.state.userId != '' ">
        <v-icon>mdi-account</v-icon>
        <span color="danger">{{$store.state.userId}}</span>
        <v-btn color="danger" class="ml-5" outlined dark small @click="logout">로그아웃</v-btn>
      </div>
      <v-btn color="danger" outlined dark v-if="$store.state.userId == ''" small to="/user/login">로그인</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item to="/board/list">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-title>게시판</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods : {
    logout(){
      this.$store.dispatch("deleteAuth");
    }
  }
};
</script>

<style></style>

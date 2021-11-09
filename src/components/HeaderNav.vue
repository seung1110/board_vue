<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-app-bar>

    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-if="$store.state.userId != ''" light>
            <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
            <v-list-item-title>
              <span color="danger">{{ $store.state.userId }}</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-btn outlined small @click="logout">로그아웃</v-btn>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item v-if="$store.state.userId == ''">
            <v-list-item-title>
              <v-btn color="danger" outlined small to="/user/login">로그인</v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
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
  }),
  methods: {
    logout() {
      this.$store.dispatch("deleteAuth");
    },
  },
};
</script>

<style></style>

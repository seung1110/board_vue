<template>
  <v-app>
    <header-nav/>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';

export default {
  components: { HeaderNav },
  name: "App",
  data: () => ({

  }),
  created(){
    this.$store.dispatch("loadAuth");
  }
};
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h2>News App</h2>
    </v-app-bar>

    <v-main>
      <NewsManager></NewsManager>
    </v-main>
  </v-app>
</template>

<script>
import NewsManager from "./components/news/pages/news-manager.vue";
export default {
  name: "App",

  components: {
    NewsManager,
  },

  data: () => ({}),
};
</script>

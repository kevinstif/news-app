<template>
  <v-container>
    <NewsList v-bind:news="news"></NewsList>
  </v-container>
</template>

<script>
import NewsService from "../services/news.services.js";
import NewsList from "./news-list.vue";
import uniqid from "uniqid";

export default {
  name: "news-manager",

  components: {
    NewsList,
  },

  data: () => ({
    news: [],
  }),

  mounted() {
    this.retrieveNews();
  },
  methods: {
    getDisplayedNews(report) {
      return {
        id: uniqid(),
        author: report.author,
        content: report.content,
        description: report.description,
        publishedAt: report.publishedAt,
        source: {
          id: report.source.id,
          name: report.source.name,
        },
        title: report.title,
        url: report.url,
        urlToImage: report.urlToImage,
      };
    },
    retrieveNews() {
      NewsService.getAll()
        .then((response) => {
          this.news = response.data.articles.map(this.getDisplayedNews);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

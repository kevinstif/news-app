<template>
  <v-main>
    <v-row v-for="report in news" v-bind:key="report.id">
      <NewsItem v-bind:report="report"></NewsItem>
    </v-row>
  </v-main>
</template>

<script>
import NewsItem from "./news-item.vue";
export default {
  components: { NewsItem },
  name: "news-list",
  data: () => ({}),
  props: ["news"],
};
</script>

<style lang="scss" scoped></style>

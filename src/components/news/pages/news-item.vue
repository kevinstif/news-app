<template>
  <v-container>
    <v-card :elevation="8" class="pa-4">
      <v-img :src="report.urlToImage" />
      <v-card-title>{{ report.title }}</v-card-title>
      <div>
        <v-row align="center" justify="end">
          <v-col
            ><v-card-subtitle>{{ report.author }}</v-card-subtitle></v-col
          >
          <v-spacer></v-spacer>
          <v-col
            ><v-card-subtitle>{{ report.publishedAt }}</v-card-subtitle></v-col
          >
        </v-row>
      </div>
      <v-card-text>{{ report.description }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue" text :href="report.url" target="_blank"> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "NewsItem",
  data: () => ({}),
  props: ["report"],
};
</script>

<style lang="scss" scoped></style>

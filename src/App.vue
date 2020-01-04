<template>
  <div id="app">
    <Header />
    <router-view :posts="posts"/>
    <Footer />
  </div>
</template>

<style lang="scss">
</style>

<script>
require("@/assets/css/style.scss");
require("@/assets/css/lib.css");
require("@/assets/css/rtl.css");

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Functions from "@/assets/js/functions.js";
import axios from "axios";

export default {
  components: { Header, Footer },
  mounted: async function() {
    await this.obterPosts();
    Functions.ready();
  },
  data() {
    return {
      posts: null
    };
  },
  methods: {
    obterPosts: async function() {
      await axios
        .get("https://blog.nucleoevent.com/wp-json/wp/v2/posts?_embed")
        .then(response => (this.posts = response.data));
    }
  },
  created() {
    window.addEventListener("scroll", Functions.sticky_menu);
    window.addEventListener("resize", Functions.menu_dropdown_open);
  },
  destroyed() {
    window.removeEventListener("scroll", Functions.sticky_menu);
    window.removeEventListener("resize", Functions.menu_dropdown_open);
  }
};
</script>
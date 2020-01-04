<template>
  <header class="container-fluid header_s header-fix fixed-top animated fadeInDown">
    <nav class="navbar ownavigation navbar-expand-lg">
      <router-link to="/" class="image-logo">
        <img :src="require('@/assets/images/logo-black.png')" alt="Logo" />
      </router-link>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav">
          <li v-for="(route, index) in routes" v-bind:key="index">
            <router-link :to="route" class="nav-link" active-class="active">{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- Header Section /- -->
</template>

<script>
export default {
  computed: {
    routes: function() {
      var routes = [];
      for (var i in this.$router.options.routes) {
        if (!this.$router.options.routes.hasOwnProperty(i)) {
          continue;
        }
        var route = this.$router.options.routes[i];
        if (route.menu) {
          routes.push(route);
        }
      }
      return routes;
    }
  }
};
</script>
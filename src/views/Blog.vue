<template>
  <div class="main-container">
    <main class="site-main">
      <!-- Portfolio Section -->

      <div class="container-fluid blog-list blog-home">
        <div class="row">
          <!-- Content Area -->
          <div class="content-area col-12">
            <div class="row justify-content-md-center">
              <!-- Blog Post -->
              <div
                class="col-lg-4 col-md-6 col"
                v-for="(post, index) in postsFormatados"
                v-bind:key="index"
              >
                <div class="blog-post">
                  <div class="post-cover">
                    <div id="post-carousel-2" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <base-link :to="post.slug">
                            <img
                              class="d-block w-100"
                              :src="post._embedded['wp:featuredmedia'][0].source_url"
                              alt="Blog Post"
                            />
                          </base-link>
                        </div>
                      </div>
                    </div>

                    <div class="post-date">
                      <a href="#">
                        <b>{{post.dateD}}</b>
                        {{post.dateM}}
                      </a>
                    </div>
                  </div>
                  <div class="entry-content">
                    <h3>
                      <base-link :to="post.slug">{{post.title.rendered}}</base-link>
                    </h3>
                    <div class="post-meta">
                      <span class="byline">POR {{post._embedded.author[0].name}}</span>
                      <!--<span class="post-like"><i class="fa fa-heart-o"></i> <a href="#" title="">11 likes</a></span>
                      <span class="post-comments"><i class="fa fa-commenting-o"></i> <a href="#" title="">32 comments</a></span>-->
                    </div>
                    <div v-html="post.excerpt.rendered"></div>
                    <base-link :to="post.slug" class="read-more" title="Leia Mais">Leia Mais</base-link>
                    <!--<a class="social" href="#" title="Social"><i class="fa fa-share-alt"></i></a> -->
                  </div>
                </div>
              </div>
              <!-- Blog Post /- -->
            </div>
            <nav class="navigation pagination d-none">
              <h2 class="screen-reader-text">Posts navigation</h2>
              <div class="nav-links">
                <a class="prev page-numbers" href="#">Previous</a>
                <a class="page-numbers" href="#">
                  <span class="meta-nav screen-reader-text">Page</span>1
                </a>
                <span class="page-numbers current">
                  <span class="meta-nav screen-reader-text">Page</span>2
                </span>
                <a class="page-numbers" href="#">
                  <span class="meta-nav screen-reader-text">Page</span>3
                </a>
                <a class="page-numbers" href="#">
                  <span class="meta-nav screen-reader-text">Page</span>4
                </a>
                <a class="next page-numbers" href="#">
                  Next
                  <i class="fa fa-angle-double-right"></i>
                </a>
              </div>
            </nav>
          </div>
          <!-- Content Area /- -->
        </div>
      </div>
      <!-- Blog Listing /- -->
    </main>
  </div>
  <!-- Quote Section /- -->
</template>

<script>
import moment from "moment";
export default {
  name: "home",
  components: {},
  props: ["posts"],
  computed: {
    postsFormatados: function() {
      let posts = [];
      for (let post in this.posts) {
        let postp = this.posts[post];
        moment.locale("pt");
        postp.dateD = moment(postp.date).format("D");
        postp.dateM = moment(postp.date).format("MMM");
        posts.push(this.posts[post]);
      }
      return posts;
    }
  }
};
</script>

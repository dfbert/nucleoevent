<template>
  <div class="main-container">
    <main class="site-main">
      <div class="container-fluid no-left-padding no-right-padding blog-single">
        <div class="container">
          <div class="row">
            <!-- Content Area -->
            <div class="content-area content-post col">
              <!-- Blog Post -->
              <div class="blog-post" v-if="post">
                <div class="post-cover">
                  <img :src="post._embedded['wp:featuredmedia'][0].source_url" alt="Blog Post" />
                  <div class="post-date">
                    <a href="#">
                      <b>{{post.dateD}}</b>
                      {{post.dateM}}
                    </a>
                  </div>
                </div>
                <div class="entry-content">
                  <h3>{{post.title.rendered}}</h3>
                  <div class="post-meta">
                    <span class="byline">
                      por
                      {{post._embedded.author[0].name}}
                    </span>
                    <div class="content" v-html="post.content.rendered"></div>
                  </div>
                </div>

                <div class="comments-area">
                  <h5>Gostou? Então compartilhe</h5>
                  <hr />
                  <AddThis publicId="ra-5e00527e107bb987" />
                  <hr />
                  <fb-comment
                    :url="`https://nucleoevent.com/${this.$route.params.slug}`"
                    :mobile="true"
                  />
                </div>
              </div>
              <!-- Blog Post /- -->
              <div class="row text-center" v-else>
                <div class="col">
                  <div class="loadingio-spinner-pulse-a7zh76k6jeb">
                    <div class="ldio-4are2yj6l7m">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import AddThis from "vue-simple-addthis-share";

export default {
  name: "home",
  components: {
    AddThis: AddThis
  },
  data() {
    return {
      posts: null
    };
  },
  methods: {
    obterPosts: function() {
      axios
        .get(
          "https://blog.nucleoevent.com/wp-json/wp/v2/posts?_embed&slug=" +
            this.$route.params.slug
        )
        .then(response => (this.posts = response.data));
    }
  },
  beforeMount: function() {
    this.obterPosts();
  },
  computed: {
    post: function() {
      let post = null;
      if (this.posts) {
        post = this.posts[0];
        moment.locale("pt");
        post.dateD = moment(post.date).format("D");
        post.dateM = moment(post.date).format("MMM");
      }
      return post;
    }
  }
};
</script>

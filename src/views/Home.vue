<template>
  <div class="main-container">
    <main class="site-main">
      <!-- Welcome Text -->
      <div class="container-fluid no-left-padding no-right-padding welcome-text">
        <!-- Container -->
        <div class="container">
          <h2>
            Olá, nós somos o
            <img
              class="logo-inline pulsing"
              :src="require('@/assets/images/logo-white.png')"
              alt="Logo"
            />
          </h2>
        </div>
        <!-- Container /- -->
      </div>
      <!-- Welcome Text -->

      <!-- Portfolio Section -->
      <div class="container portfolio-section">
        <!-- Portfolio List -->
        <div class="row portfolio-list">
          <div class="col-12 m-0 text-white">
            <p class="m-0 m-md-1">Últimas postagens</p>
          </div>

          <div
            :class="index == 0 ? 'col-12 col-md-12 col-lg' : 'col-12 col-md'"
            v-for="(post, index) in postsFormatados"
            v-bind:key="index"
          >
            <base-link :to="post.slug">
              <div class="portfolio-box">
                <div
                  class="portfolio-detail"
                  :style="`background-image: url('${post._embedded['wp:featuredmedia'][0].source_url}')`"
                ></div>
                <div class="portfolio-content">
                  <span>{{post.title.rendered.slice(0, 58)}}</span>
                </div>
              </div>
            </base-link>
          </div>

          <!--
          <div class="col-12 col-md-12 col-lg">
            <a href="single-work.html">
              <div class="portfolio-box">
                <div
                  class="portfolio-detail"
                  style="background-image: url('https://instagram.fcpq4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/69020390_391517838224580_8259069341262894390_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net&_nc_cat=100&oh=cc7e45bcc3fe46997d9b5d59f04b9824&oe=5E8659E9')"
                ></div>
                <div class="portfolio-content">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md">
            <a href="single-work.html">
              <div class="portfolio-box">
                <div
                  class="portfolio-detail"
                  style="background-image: url('https://instagram.fcpq4-1.fna.fbcdn.net/v/t51.2885-15/e35/54512204_430412327731091_8339333440168408514_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net&_nc_cat=111&oh=d058f1e53b9a3fc970b126b341c3f97d&oe=5E7F0ED5')"
                ></div>
                <div class="portfolio-content">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md">
            <a href="single-work.html">
              <div class="portfolio-box">
                <div
                  class="portfolio-detail"
                  style="background-image: url('https://instagram.fcpq4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/58608534_658429597938669_4488439370043099655_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net&_nc_cat=109&oh=7f1baf21c52c356b6f4b0459550a2812&oe=5E6ADCE3')"
                ></div>
                <div class="portfolio-content">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
              </div>
            </a>
          </div>

          -->
        </div>
        <!-- Row -->
      </div>
      <!-- Portfolio Section /- -->

      <!-- Quote Section -->
      <div class="container-fluid no-left-padding no-right-padding quote-section">
        <!-- Container -->
        <div class="container">
          <div class="row">
            <div class="col text-left">
              <div>
                <h1>
                  <b>O que somos?</b>
                </h1>
                <div class="row">
                  <div class="col-12 col-md">
                    <h3>
                      <img
                        :src="require('@/assets/images/logo-black.png')"
                        class="logo-inline"
                        alt="Logo"
                        style="width: 110px; margin: -8px 0 0;"
                      /> é
                      <b>arte</b>,
                    </h3>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
                      molestie
                      facilisis. Sed tempor ipsum eu semper elementum. Praesent viverra et tellus
                      id
                      condimentum. Sed velit sem, euismod sit amet hendrerit ac, malesuada quis
                      felis.
                      Vivamus
                      eleifend id erat non vestibulum. Fusce malesuada fermentum ex mollis
                      consectetur.
                      Nunc
                      sit amet interdum lorem.
                    </p>
                  </div>
                  <div class="col-12 col-md">
                    <h3>
                      <img
                        :src="require('@/assets/images/logo-black.png')"
                        class="logo-inline"
                        alt="Logo"
                        style="width: 110px; margin: -8px 0 0;"
                      /> é
                      <b>cultura</b>,
                    </h3>
                    <hr />
                    <p>
                      Fusce commodo, ex et gravida sodales, turpis est ullamcorper est, et varius
                      erat
                      lectus ut nisi. Suspendisse potenti. Donec pretium elit eget sapien aliquam
                      aliquet.
                      Cras posuere, leo vel porttitor tempor, ipsum orci ullamcorper felis, vel
                      elementum
                      orci enim nec tellus. Sed in cursus ipsum. Mauris volutpat nunc a mi
                      sollicitudin,
                      sit amet molestie libero molestie. Nunc molestie efficitur laoreet.
                    </p>
                  </div>
                  <div class="col-12 col-md">
                    <h3>
                      <img
                        :src="require('@/assets/images/logo-black.png')"
                        class="logo-inline"
                        alt="Logo"
                        style="width: 110px; margin: -8px 0 0;"
                      /> é
                      <b>música</b>.
                    </h3>
                    <hr />
                    <p>
                      Phasellus volutpat consectetur ipsum, id rhoncus dolor tincidunt eu.
                      Maecenas
                      aliquam
                      erat a ante egestas ultrices. In luctus vel leo viverra venenatis. Cras
                      vehicula
                      tellus
                      blandit mauris posuere, at pretium lectus tempor. Mauris cursus risus quis
                      justo
                      fermentum, nec molestie tellus pharetra. Donec a aliquam quam. Aenean mattis
                      sollicitudin molestie. Integer mattis eros diam, in laoreet orci maximus
                      vitae.
                      Integer
                      semper tortor nec arcu lacinia ultrices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Container /- -->
      <div class="black-sec">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>
                <b>Quem somos?</b>
              </h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
                molestie
                facilisis. Sed tempor ipsum eu semper elementum. Praesent viverra et tellus
                id
                condimentum. Sed velit sem, euismod sit amet hendrerit ac, malesuada quis
                felis.
                Vivamus
                eleifend id erat non vestibulum. Fusce malesuada fermentum ex mollis
                consectetur.
                Nunc
                sit amet interdum lorem.
              </p>
            </div>
            <div class="col">
              <div class="crew technoinspire"></div>
              <div class="crew houseandsessions"></div>
              <div class="crew noxagency"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <!-- Quote Section /- -->
</template>

<script>
export default {
  name: "home",
  components: {},
  props: ["posts"],
  computed: {
    postsFormatados: function() {
      let posts = [];
      for (let post in this.posts) {
        if (post < 3) {
          posts.push(this.posts[post]);
        }
      }
      return posts;
    }
  }
};
</script>

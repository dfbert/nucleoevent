import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import Post from '@/views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Início',
    menu: true,
    component: Home
  }, {
    path: '/blog',
    name: 'Blog',
    menu: true,
    component: Blog
  }, {
    path: '/:slug',
    name: 'Post',
    menu: false,
    component: Post
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

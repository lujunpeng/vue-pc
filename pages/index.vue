<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        lujunpeng
      </h1>
      <!-- <h2 class="subtitle">
        Nuxt.js project
      </h2> -->
      <div class="links">
        <!-- <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a> -->
      </div>
    </div>
  </section>
</template>

<script>
import { indexPost } from '@/api/index'
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  },
  mounted() {
    this.indexPost()
  },
  methods: {
    indexPost() {
      const form = {
        delId: 27,
        // id: 1,
        title: 'hhhh',
        author: 'lujunpeng',
        date: '2018-08-01'
      }
      indexPost(form).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

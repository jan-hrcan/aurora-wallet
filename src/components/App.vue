<template>
  <div>
    <Header :routes="routes" />
    <router-view />
    <Footer :routes="routes" />
  </div>
</template>
<script>

import Header from './common/Header.vue'
import Footer from './common/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.$router.options.routes.forEach(route => {
      this.routes.push({
        title: route.title,
        name: route.name,
        path: route.path
      })
    })
  }
}

</script>

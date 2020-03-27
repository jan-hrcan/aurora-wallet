<template>
  <div>
    <Header :routes="routes" />
    <h1>Aurora App</h1>
    <router-view />
  </div>
</template>

<script>
import Header from './common/Header.vue'
export default {
  name: 'App',
  components: {
    Header
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

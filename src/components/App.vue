<template>
  <div>
    <Header :routes="routes" />
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

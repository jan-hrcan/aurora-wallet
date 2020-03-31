<template>
  <div>
    <Header :routes="routes" />
    <router-view />
       <Footer :routes="routes" />
       <div class="rectangle">
         <h1>About Us</h1>
            <div class="text-content">
        <p>“Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun. 
            Orbiting this at a distance of roughly ninety-two million miles is an utterly insignificant little blue green planet whose ape-descended
            life forms are so amazingly primitive that they still think digital watches are a pretty neat idea.”
       <br>
       <br>
            We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths!
        </p>
          </div>
        </div>
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

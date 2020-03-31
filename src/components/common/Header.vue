<template>
  <header>
    <nav>
      <ul>
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
        >
          {{ route.title }}
        </router-link>
      </ul>
      <ImageButton :source="source" />
    </nav>
  </header>
</template>

<script>

// import ImageButton from './ImageButton.vue'
// export default {
//   name: 'Header',
//   components: {
//     ImageButton
//   },
//   props: {
//     routes: {
//       type: Array,
//       required: true
//     }
//   },
//   data () {
//     return {
//       source: '../assets/images/prof_pic.png'
//     }
//   }
// }
</script>

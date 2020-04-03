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
    </nav>
    <div class="header_button_container">
      <ImageButton :source="imageSources.profileImage" />
      <ImageButton :source="imageSources.signOutImage" />
    </div>
  </header>
</template>

<script>
import ImageButton from '../reusable/ImageButton.vue'
export default {
  name: 'Header',
  components: {
    ImageButton
  },
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      imageSources: {
        profileImage: '/assets/images/prof_pic.png',
        signOutImage: '/assets/images/sign_out.png'
      }
    }
  }
}
</script>

<template>
  <router-link to="/profile">
    <img :src="source">
  </router-link>
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    source: {
      type: String,
      default: ''
    }
  }
}
</script>

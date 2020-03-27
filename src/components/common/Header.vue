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
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>

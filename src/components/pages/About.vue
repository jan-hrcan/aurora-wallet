<template>
  <div>
    <div class="container" />
    <h1>About Us</h1>
    <NavigationButton />
    <NavigationButton />
    <NavigationButton />
    <NavigationButton />

    <div class="text-content">
      “Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.
      Orbiting this at a distance of roughly ninety-two million miles is an utterly insignificant little blue green planet whose ape-descended
      life forms are so amazingly primitive that they still think digital watches are a pretty neat idea.”
      <br>
      <br>
      We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths!
    </div>
  </div>
</template>
<script>
import NavigationButton from '../reusable/NavigationButton.vue'
export default {
  name: 'App',
  components: {
    NavigationButton
  }
}
</script>

<template>
  <h1>Main Component</h1>
<NonProps item="some data" name="user-cmd"/>
</template>

<script>
import NonProps from './components/NonProps.vue'

export default {
  name: 'App',
  components: {
    NonProps
  },
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
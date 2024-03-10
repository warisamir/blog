<template>
  <h1>Main Component</h1>
<NonProp item="some data" name="user-cmd"/>
</template>

<script>
import NonProp from './components/NonProp.vue'

export default {
  name: 'App',
  components: {
    NonProp,
  },
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>./components/NonProp.vue
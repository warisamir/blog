<template>

<h2>Parent Component</h2>

<HtmlBind/>
</template>

<script>
import HtmlBind from './components/HtmlBind.vue';

export default {
  name: 'App',
  components: {
    HtmlBind,
  },
  
}
</script>

<style scoped>

h1{
  color:yellow
}
</style>
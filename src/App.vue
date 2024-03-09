<template>

<h2>Parent Component</h2>
<ClassBinding/>
</template>

<script>
import ClassBinding from './components/ClassBinding.vue';
export default {
  name: 'App',
  components: {
    ClassBinding
  },
  
}
</script>

<style scoped>

h1{
  color:yellow
}
</style>
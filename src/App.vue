<template>

<h2>Parent Component</h2>
<PropsPassing/>
</template>

<script>

import PropsPassing from './components/PropsPassing.vue';

export default {
  name: 'App',
  components: {
    PropsPassing,

  },
  
}
</script>

<style scoped>

h1{
  color:yellow
}
</style>
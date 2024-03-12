<template>

<h1>Main Component</h1> 
<!-- here tab="name should be match with the component  " -->
<LifeCreate/>
</template>

<script>
import LifeCreate from './Comp/LifeCreate.vue';


export default {
  name: 'App',
  components: {
   LifeCreate
  }
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
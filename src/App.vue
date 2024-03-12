<template>
<h1>parent Component</h1>
<button v-on:click="show=!show">toggle</button>
<UnMount v-if="show"/>
</template>
<script>
import UnMount from './Comp/UnMount.vue';


export default {
  name: 'App',
  data(){
    return {
        show:true
    }
  },
   components: {
    UnMount
}
}
</script>
<style scoped>
h1{
  color:chocolate;
}
</style>.
<template>
<h1>Main Component</h1>
<!-- here tab="name should be match with the component  " -->
<button @click="tab='JavaFile'">Press Java</button>
<button @click="tab='NodeFile'">Press Node</button>
<button @click="tab='PhpFile'">Press Php</button>

<component :is="tab"/>
</template>

<script>
import JavaFile from './Comp/JavaFile.vue';
import NodeFile from './Comp/NodeFile.vue';
import PhpFile from './Comp/PhpFile.vue';


export default {
  name: 'App',
  components: {
    JavaFile,NodeFile,PhpFile
  },
  data(){
    return {
      tab:'JavaFile'
    }
  }
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
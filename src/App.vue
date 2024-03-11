<template>
  <h1>Main Component</h1>
<!-- <CompuTed/> -->
<WatchMain/>
</template>

<script>
import WatchMain from './components/WatchMain.vue';

// import CompuTed from './components/CompuTed.vue';
// import NonProp from './component/NonProp';


export default {
  name: 'App',
  components: {
    // CompuTed,
    WatchMain
  },
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
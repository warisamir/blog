<template>
  <h1>Main Component</h1>

<SlotChild ><h1>Code ing journey</h1></SlotChild>
<SlotChild><Img src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"></Img></SlotChild>
</template>

<script>
import SlotChild from './components/SlotChild.vue';



export default {
  name: 'App',
  components: {
    SlotChild
  },
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
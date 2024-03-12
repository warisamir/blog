<template>
<h1>Main Component</h1>
<!-- here tab="name should be match with the component  " -->
<teleport to="#fLifeooter">
  <Teleport/>
</teleport>
</template>

<script>
import Teleport from './Comp/TelePort.vue';

export default {
  name: 'App',
  components: {
        Teleport
  }
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
<template>
  <div>
  <h1>Main Component</h1>
  <MutipleSlot >
 <template v-slot:header>
  <h1 >Peter</h1> 
</template>
<template v-slot:content>
  <h1 >A vvietnamian </h1> 
</template>
<template v-slot:footer>
<button>Click me!</button>
</template>
</MutipleSlot>
<MutipleSlot >
 <template v-slot:header>
  <h1 >Faccebook</h1> 
</template>
<template v-slot:content>
  <h1 >A Reactjs </h1> 
</template>
<template v-slot:footer>

</template>
</MutipleSlot>
</div>
</template>

<script>
import MutipleSlot from './components/MutipleSlot.vue';


export default {
  name: 'App',
  components: {
    MutipleSlot
  },
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
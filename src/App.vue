<template>
  <!-- <ConditionRendering/> -->
  <!-- <PassData/> -->
  <!-- <ForLoop/> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <HomeWork ></HomeWork> -->
<!-- <laonAmount></laonAmount>
<InputForm></InputForm>
<HomeLate/> -->
<h2>Parent Component</h2>
<ul>
  <li v-for="item in users" :key="item.name">
  <!-- {{ item.name }} --- {{ item.email }} -->
  <ChildReuse :data="item" :getData="getData"/>
  </li>

</ul>

</template>

<script>
// import ConditionRendering from './components/ConditionRendering.vue'
// import  ForLoop from './components/ForLoop.vue'
// import PassData from './components/PassData.vue'
// import HomeLate from './components/HomeLate.vue'
// import InputForm from './components/InputForm.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HomeWork from './components/Home.vue'
// import laonAmount from './components/laonAmount.vue';
import ChildReuse from './components/ChildReuse'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HomeWork,
    // InputForm,
    // ConditionRendering,
    // PassData,
    // HomeWork,
    // ForLoop,
    // laonAmount,
    // HomeLate
    ChildReuse,
  },
  data(){
    return {
      users:[
        {name:'anil',email:'warisamir1919@gmail.com'},
        {name:'rock',email:'warisamir1919@gmail.com'},
        {name:'krk',email:'warisamir1919@gmail.com'},
        {name:'srk',email:'warisamir1919@gmail.com'},
      ],
    }
  },
  methods:{
        getData(name){
            alert(name)
        }
    }
}
</script>

<style scoped>

h1{
  color:yellow
}
</style>
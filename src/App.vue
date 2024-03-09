<template>
  <h1>User Name: {{ UserName }}</h1>
<SiblingFile :getUser="getUserName"/>
</template>

<script>
import SiblingFile from './components/SiblingFile.vue';


export default {
  name: 'App',
  data(){
    return{
      UserName:""
    }
  },
  components: {
      SiblingFile
  },
  //props are passing from parent to child
  methods:{
    getUserName(UserName){
      // passing a function from parent component to child component
       this.UserName=UserName
    }
  }
}
</script>

<style scoped>

h1{
  color:chocolate;
}
</style>
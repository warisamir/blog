<template>
<h1>tihs is create life cycle</h1>
<h3> ihere it will be printing the life cycle as {{name}}</h3>
</template>

<script>
export default{
    name:'LifeCreate',
    data(){
    console.warn("Createdat data") 
    return{
      name:"Waris"
    }
  },
  beforeCreate(){
    this.name="chandimal"
  alert("before create")
  },
  created(){
    this.name="chandimal"
    alert("created")
  }
}
</script>
<template>
<h2>
    User Component
</h2>
<button  v-on:click="getUser(UserName)">click me</button>
</template>


<script>
export default{
    name:"SiblingFile",
    data(){
        return {
            UserName:"Rocky"
        }
    },
    props:{
        // here  this is  prop function which is used to pass data from child `SiblingFile` to parent          to child
        getUser:Function
    }
}
</script>
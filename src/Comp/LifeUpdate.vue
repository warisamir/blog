<template>
    <h1 ref="count">{{counter}}</h1>
   <button v-on:click="counter=counter+1"> Update Count</button>
    </template>
    <script>
    export default{
    name: "LifeUpdate",
    data() {
    return {
       counter:0
    }
    },
    beforeUpdate() {
        console.log("before update",this.$refs['count'].textContent);
    },
    updated() {
        console.log("updated",this.$refs['count'].textContent);
    }
    }
    </script>
    
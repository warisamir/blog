<template>
    <h3>{{ name }}</h3>
    <h3>{{ data.email }}</h3>
    <button v-on:click="getData">getMe</button>
    </template>

    <script>
    export default{
        name:'ChildProp',
        props : {
            name:String,
            data:Object,
            getData:Function
        }
    }
    </script>


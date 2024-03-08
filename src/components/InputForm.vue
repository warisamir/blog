<template>
    <input type="text" placeholder="enter you email" v-model="email"/>
    <br/><br/>
    <input type="password" placeholder="enter you password" v-model="password"/>
    <br/><br/>
    <button type="button" v-on:click="getData()">submit</button>
    </template>
    <script>
    export default {
        name: 'InputForm',
        data(){
            return {
               email:null,
               password:null
            }
        },
        methods:{
            getData(){
                console.warn("function",this.email,"password=",this.password)
            }
        } 
    }
</script>
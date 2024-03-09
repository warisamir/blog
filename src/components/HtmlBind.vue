import { default } from '../App.vue';
<template>
    <h1>{{ text }}</h1>
    <div v-html="tag +tag2">
        </div>
    </template>
    <script>
    export default{
        name:'HtmlBind',
        data(){
            return {
                text:"Waris Amir",
                tag:'<h2>anil sidhu</h2>',
                tag2:'<h1>Peter</h1>',
            }
        }
    }
</script>

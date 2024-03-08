<template>
<h1>for Loop in Vue js </h1>
<ul>
    <li v-for="item in tech" :key="item">
        {{ item }}}</li>
</ul>
</template>
<script>
export default {
    name:"ForLoop",
    data(){
        return {
            tech:["Java","php","python","html"]
        }
    }
}
</script>
<style scoped>
</style>

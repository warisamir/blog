<template>
<h2>{{profile}}'s Profile</h2>
</template>


<script>
import { useRoute } from 'vue-router';

export default{
    name:"ProfilePage",
    data(){
        return {
            profile:''
        }
    },
    mounted(){
        const route = useRoute();
        console.warn("route",route.params.id)
        this.profile=route.params.id 
    }
}
</script>
<style>
h1{
    color:orange;
}
</style>
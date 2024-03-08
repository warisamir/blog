<template>
<h3>get CheckBox & Radio Button Value</h3>
<h2>Technology used </h2>
<label for="java">Java</label><input type="checkbox" v-model="technology" value="java"  id="Java">
<label for="php">php</label><input type="checkbox" v-model="technology" value="php" id="php">
<label for="python">python</label><input type="checkbox" v-model="technology" value="python" id="python">
<h3>Selected tech:{{ technology }}</h3>
<br/><br/>
<h2>who am i</h2>
<label for="student">Student</label>
<input type="radio" v-model="who" value="student" name="who" id="student">
<label for="developer">Developer</label>
<input type="radio" v-model="who" value="developer" who="who" id="developer">
<h3>I am the :{{ who }}</h3>
</template>

<script>


export default{
    name:"HomeLate",
    data(){
        return{
            technology:[],
            who:null
        }
    }
}
</script>


<style scoped>
h1{
    color:orange;
}
</style>
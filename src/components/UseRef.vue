<template>
<h1>this is our domain of expertise</h1>

<input type="text" ref="input"/>
<button v-on:click="getData"> click</button>
</template>
<script>
export default {
    name:'UseRef',
    methods:{
        getData(){
            this.$refs.input.focus();
            this.$refs.input.value="amir",
            this.$refs.input.style.color="red"
            console.warn(this.$refs.input.value)
        }
    }
}
</script>
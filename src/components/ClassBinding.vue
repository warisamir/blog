<template>
<h1>vue js classes</h1>
<!-- colorfull is act like a variable in the data part which is used for providiing the data 
 -->
<h3 class="staticClass" :class="adjustStyle" >Home component</h3>
<button v-on:click="colorfull=!colorfull">Apply me</button>
</template>

<script>
export default {
    name: "ClassBinding",
    data() {
        return {
            colorfull: true,
            // we can also this on the click of the button Apply me
        }
    },
    computed: {
        // this computed is porperty not a function as function donot have colon after that 
        adjustStyle() {  
            return {
                green: this.colorfull,
                err: true,
                other: true,
            }
        }
    }
}
</script>

<style scoped>
h1 {
    color: chocolate;
}

.green {
    background-color: rgb(78, 184, 125);
    width: 4em;
    padding: 1em;
    height: 2em;
    color: #fff
}
.err{
    color: red;
}
.other{
font-size: 3em;
}
</style>

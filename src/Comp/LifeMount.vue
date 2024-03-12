<template>
<h1>beforeMount and mounted {{ name }}</h1>
<h2>code stepUP</h2>
</template>
<script>
export default{
name: "LifeMount",
data() {
return {
    name: 'Anil'
}
},
beforeMount() {
    console.warn("before mount",this.$el);
},
mounted() {
    console.warn("mounted",this.$el);
}
}
</script>

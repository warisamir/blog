<template>
<h1>Non Props</h1>
<h3 v-bind="$attrs">bruce</h3>
<h3>wayne</h3>
<h4>{{ item }}</h4>
</template>
<script>
export default{
    name:'NonProps',
    props:{
        item:String
    },
}
</script>
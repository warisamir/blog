<template>
    <div>
<h2 >Non Props</h2>
<h3 >bruce</h3>
<h3 v-bind="$attrs">wayne</h3>
    </div>
</template>
<script>
export default{
    name:'NonProp',
    props:{
        item:String,
    }
}
</script> 
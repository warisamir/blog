<template>
<h1>tihs is create life cycle</h1>
<h3> ihere it will be printing the life cycle as {{name}}</h3>
</template>

<script>
export default{
    name:'LifeCreate',
    data(){
        return {
            name:"Anil"
        }
    },
    beforeCreate() {
        console.warn("before create life cycle");
    },
    created() {
        console.warn("create life cycle");
    }
}
</script>
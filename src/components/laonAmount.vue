<template>
<div>
    <button v-on:click="getData('btn1 clicked')">btn1</button>
    <button v-on:dblclick="getData('btn2 clicked')">btn2</button>
 <input type="text" v-model="count"/>
 <h2>{{ count }}</h2>
 </div>
</template>
<script>

export default {
    name: 'laonAmount',
    data(){
        return {
        count:1,
        }
    },
    methods:{
        getData(data){
            alert(data)
        }
    }
}

</script>
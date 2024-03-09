import ChildReuse from 'components/ChildReuse';

<template>
    <div class="ChildReuse">
<h2>{{ data.name }}</h2>
<h3>{{ data.email }}</h3>
<button v-on:click="getData(data.name)">Alert user  name</button>
</div>
</template>
<script>
export default {
    name:"ChildResue",
    props:{
        data:Object,
        getData:Function,
    },

}
</script>
<style>
.ChildReuse{
    background-color: aquamarine;
}
</style>
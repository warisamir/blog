<template>
<h1>Home Component</h1>
<h2>candidate {{ email }}</h2>
<h4>name :{{ getName("burce") }}</h4>
<h3>al data :{{ getData().email }}</h3>


</template>
<script>
export default { 
    name:'HomeWork',
    data(){
        return {
            email:"warisamir@gmail.com",
            mobile:"9022"
        };
    },
    methods:{
        getName(name)
        {
            return name;
        },  
         getData(){
            return {
                name:'amit',
                email:this.email
            }
        }
    }
}
</script>
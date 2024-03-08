<template>
<h1>for Loop in Vue js </h1>
<ul>
    <li v-for="item in tech" :key="item">
        {{ item }}}</li>
</ul>
<br/>
<br/>
<ul>
    <li v-for="user in user" :key="user">Name is{{ user.name  }}, <br/>
    Email is{{ user.email}} <br/></li>
</ul>
</template>
<script>
export default {
    name:"ForLoop",
    data() {
        return {
            tech:["Java","php","python","html"],
            user:[
                {
                    name:"Anil",
                    email:'anil@test.com',
                    phone:122334,
                },
                {
                    name:"bruce",
                    email:'bruce@test.com',
                    phone:122335,
                },
                {
                    name:"clark",
                    email:'clark@test.com',
                    phone:122336,
                }
            ]
        }
    }
}
</script>
<style scoped>
</style>

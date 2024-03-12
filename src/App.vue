<template>
<h1>parent Component</h1>
<router-link  to="/">Home</router-link><br/><br/>
<router-link  to="/login">Login</router-link><br/><br/>
<router-link  to="/profile/1">Anil's Profile</router-link>
<router-link  to="/profile/2">Peter's Profile</router-link>
<router-link  to="/profile/3">Bruce's Profile</router-link>
<router-view></router-view>
</template>
<script>

export default {
  name: 'App',
}

</script>
<style scoped>
h1{
  color:chocolate;
}
</style>.
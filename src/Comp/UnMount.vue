<template>
<h1 ref="user">User Component</h1>
</template>
<script>
export default {
name:'UnMount',
  beforeUnmount(){
    console.log(`beforeUnMount`,this.$refs['user']);
  },
  unmounted(){
    console.log("after unmount",this.$refs[`user`]);
  }
}

</script>
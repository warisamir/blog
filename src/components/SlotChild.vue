<template>
  
       <slot/>
       <slot><h1>Child image</h1></slot>

    <!-- /suppoes we have to pass array or image or othr kind of data then we have problem ,here comes the solution 
    with slot  as solution -->
</template>
<script>
export default {
    name:'SlotChild',
            props:{
                data:String,
            }
}
</script>
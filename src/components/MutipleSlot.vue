<template>
<div class="cart">
  <header> 
    <slot name="header">
      </slot>
    </header>
    <content>
        <slot name="content "></slot>
    </content>
 <footer>
    <slot name="footer">
      <button v-on:click="getData">Click Me!</button>
    </slot>
 </footer>
 </div>
</template>
<script>
export default{
    name:'MutipleSlot',
    data(){
        return {

        }
    }
}
</script>
<style>
.cart{
border: 1px solid black;
width: 170px;
text-align: center;
padding: 20px;
}
</style>
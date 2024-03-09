<template>
<form>
<label> Email </label>
<input type="email" placeholder="enter email" v-model="email"/>
<br/><br/>
<label> Password</label>
<input type="password" placeholder="password" v-model="password"/> 
<br/> <br/>
<button v-on:click="login" type="button">click</button>
</form>
</template>


<script>
export default {
    name:"DatabingForm",
data(){
    return {
        email:"",
        password:""
    }
},
methods:{
    login(){
        console.warn("function",this.email,"password=",this.password)
    }
}
}

</script>
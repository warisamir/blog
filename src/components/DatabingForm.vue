<template>
    <p>simple form{{ form }}} </p>
<form>
<label> Email : </label>
<input type="text" placeholder="enter email" v-model="form.email"/>
<br/><br/>
<label> Password : </label>
<input type="password" placeholder="enter password" v-model="form.password"/> 
<br/> <br/>
<select v-model="form.country">
    <option value="">India</option>
    <option value="">USA</option>
</select>
<br/><br/>
<label> Gender : </label>
<input type="radio" name="gender" value="male" v-model="form.gender">Male
<input type="radio" name="gender" value="female" v-model="form.gender"/>female
<br/><br/>
<label> Tech : </label>
<input type="radio" name="tech" value="Java" v-model="form.tech">Java
<input type="radio" name="tech" value=".Net" v-model="form.tech"/>.Net
<br/><br/>
<button v-on:click="submit" type="button">login</button>
</form>
</template>


<script>
export default {
    name:"DatabingForm",
data(){
    return {
        form:{
        email:'',
        password:'',
        country:'',
        gender:'',
        }
    }
},
methods:{
    submit(){
        console.warn(this.form)
    }
}
}

</script>
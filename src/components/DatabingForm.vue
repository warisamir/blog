<template>
    <p>simple form  {{ form }} </p>
<form>
<label> Email : </label>
<input type="text" placeholder="enter email" v-model="form.email"/>
<br/><br/>
<label> Password : </label>
<input type="password" placeholder="enter password" v-model="form.password"/> 
<br/> <br/>

<select v-model="form.country">
    <option>India</option>
    <option>USA</option>
</select>
<br/><br/>
<h3> Gender : </h3>
<label>Male</label>
<input type="radio" name="gender" value="male" v-model="form.gender">
<label>Female</label>
<input type="radio" name="gender" value="female" v-model="form.gender"/>
<br/><br/>
<h3>tech</h3>
<label>Java</label>
<input type="checkbox"  value="Java" v-model="form.tech">
<label>.Net</label>
<input type="checkbox" value=".Net" v-model="form.tech"/>
<br/><br/>
<button v-on:click="login" type="button">login</button>
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
        tech:[]
        }
        ,error:[]
    }
},
methods:{
    login(){
        
        this.error=[ ]
        for(const item in this.form){
            if(this.form[item]===""|| this.form[item].length===0)
            {
                this.error.push(item);
            }
            if(this.error.length===0)
            {
                alert("Data has been submitted")
            }
            console.warn(this.error)
        }
    }
}
}

</script>
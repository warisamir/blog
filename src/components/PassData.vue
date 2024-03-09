<template>
    <h2>Parent component</h2>
    <ChildProp :name="name" :data="user" :getData="getData"/>
</template>
<script>
import ChildProp from './ChildProp.vue'
export default {
    name:"PassData",
    components:{
        ChildProp
    },
    data(){
        return {
            name:"bruce",
            user:{
                name:"bruce",
                email:"bruce@test.com"
            }
        }
    },
    methods:{
        getData(){
            alert("function called")
        }
    }
}
</script>
<styled scope>

</styled>
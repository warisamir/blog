<template>
    <h1>props passing</h1>
    <ChildOne :name="name"/>
    <TeacherOne :data="data" />
    </template>
    <script>
import ChildOne from './ChildOne.vue';
import TeacherOne from './TeacherOne.vue';

// name of the props should be same while passing form parent component to child in the template 
//although the values can differ 

    export default {
        name:'PropsPassing',
        data(){
            return {
                 name:"Rocky",
                 data:"Anil",
            }
        },
        components:{
            TeacherOne,
            ChildOne,
        }
    }
</script>
<styled scope>

</styled>

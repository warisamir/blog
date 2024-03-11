<template>
<h2>fullname -{{ firstname }} {{ lastname }}</h2>
<h2>Computed fullname-{{ fullName }}</h2>
<h3>Computed price- {{ total }}</h3>
<h3>total -{{ items.reduce((total,item)=>total+item.price),0) }}</h3>
</template>
<script>
export default{
    name:'CompuTed',
    data(){
        return{
        firstname:'waris',
        lastname:'amir',
        items:[
            {
                id:1,
                title:'TV',
                price:100,
            },
            {
                id:'2',
                title:'Fridge',
                price:300,
            }
            ,{
                id:'3',
                title:'Washing Machine',
                price:600,
            }
        ]
    }
    },
    methods:{},
    computed:{
        fullName(){
            return this.firstname + ' ' + this.lastname
        },
        total(){
            return this.items.reduce((total,item)=>total+item.price,0)
        }
    }
}
</script>
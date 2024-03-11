
    <template>
        <div>
            <h1>{{count}}</h1>
            <button v-on:click="count=count+1">+</button>
            <button v-on:click="count=count-1">-</button>
        </div>
    </template>
    <script>
    export default {
         name: "WatchMain",
         data(){
            return {
                count:0
            }
         },
         watch:{
            count(curr,old){
                if(curr>5 && curr>old)
                alert("value change");
            else ;
            }
         }
    }
    </script>
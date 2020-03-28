
<template>
  <div class="hello">
      <div>{{$store.getters.doneTodos }}</div>
    <div class="mg-t20">
      count: <span>{{$store.state.count}}</span>
    </div>
    <vuexChild></vuexChild>
  </div>
</template>
 
<script>
import vuexChild from "@/component/vuexChild.vue";

export default {
  name: 'vuex',
  components: {
    vuexChild
  },
  data () {
    return {
     
    }
  },
  mounted(){
  },
  computed:{
  },
  methods:{
    
}}
</script>
<style scoped>
.hello{
    padding: 20px;
    width: 500px;
    height: 200px;
    border:1px grey solid
    /* background-color:#d4d4d4; */
}
.mg-t20{
    margin-top: 20px;
}
span{
    padding: 5px;
    color: red;
}
</style>
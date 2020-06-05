<template>
  <div class="childContent">
    <div>我的vuex子组件</div>    
    <button @click="increaseChild">增加</button>
    <button @click="reduceChild">减少</button>
    <button @click="changeAdd">修改</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "vuexChild",
  data() {
    return {
      value:""
    };
  },
  mounted(){
  },
  methods:{
    changeAdd(){
      this.$store.dispatch('increase',6)
    },
     increaseChild(){
        this.$store.commit('increase',2)
     },
     reduceChild(){
        this.$store.commit('reduce',2) 
     }
  }
};
</script>
<style  scoped>
.childContent {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  background: #ceb8b8;
}
button{
    margin-top: 10px;
}
</style>
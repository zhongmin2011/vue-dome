<template>
  <div class="childContent">
    <div>我是 最里面 组件</div>
    <div style="margin-top:10px;">value值：{{value}}</div>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
        //value:''
    };
  },
  props: {
      value: {
          type: String
      }
  },
//   computed: {
//     getVal() {
//       return this.parent.value;
//     }
//   },
  // watch: {
  //     getVal(newVal) {
  //         console.log(newVal)
  //     }
  // },
  methods: {}
};
</script>
<style  scoped>
.childContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background: #cc8585;
  width: 350px;
  height: 250px;
}
</style>
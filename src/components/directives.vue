<template>
  <div class="directives">
    <div>刚加入页面时，获取焦点，并且颜色为红色</div>
    <input v-model="value" v-focus="value" v-color="'red'" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  directives: {
    // 这里定义指令的
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    },
    color: {
      // 为元素设置指定的字体颜色
      bind(el, binding) {
        el.style.color = binding.value;
      }
    }
  }
};
</script>
<style scoped>
.directives {
  padding: 20px;
}
</style>
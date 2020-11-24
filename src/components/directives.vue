<template>
  <div class="directives">
    <div>刚加入页面时，获取焦点，并且颜色为红色</div>
    <input v-model="value" v-focus="value" v-color="'red'" />
    <div class="plain">
      <div style="border:1px red solid;">
        <div class="title">局部指令操作：</div>
        <div>1，在页面的script —— export default范围中，有一个专门定义指令的操作叫directives</div>
        <div>2，在directives中定义指令名；例如</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;directives:&nbsp;{</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;focus:&nbsp;{// 直接在这里定义指令名</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inserted: function(el) {</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.focus();</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;{// 直接在这里定义指令名</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bind(el, binding) {</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.style.color = binding.value;</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
      </div>
      <div>全局指令定义：</div>
    </div>
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
.plain{
  margin-top: 20px;
}
.title{
  padding: 10px 0;
}
</style>
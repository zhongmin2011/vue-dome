<template>
  <div class="local">
    本地存储：
    <input type="text" v-model="valueLocal" @change="localVlaue(valueLocal)" />
    <div>这里已经存储了输入的值，可以到nextTick页面中，看到本地存储的value值</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueLocal: ""
    };
  },
  methods: {
    localVlaue(value) {
      console.log(value, "changeValue");
      localStorage.setItem("valueLocal", value);
    }
  }
};
</script>
<style scoped>
.local{
    padding: 20px;
}
</style>
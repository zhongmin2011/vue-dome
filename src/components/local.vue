<template>
  <div class="local">
    本地存储：
    <input type="text" v-model="valueLocal" @change="localVlaue(valueLocal)" />
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
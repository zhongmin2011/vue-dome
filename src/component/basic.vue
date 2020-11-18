<template>
  <div class="basicContent">
      <!-- :model="formContent" -->
    <Form class="form" ref="formContent"  label-width="200px">
      <template>
        <input type="text" />
      </template>
      <template>
        <input type="textarea" />
      </template>
      <template>
        <input type="number" />
      </template>
      <template>
        <input type="radio" />
      </template>
      <template>
        <input type="checkbox" />
      </template>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.basicContent {
  padding: 10px;
  border: 1px red solid;
}
.formItem {
    padding: 10px;
  border: 1px green solid;
  height: 200px;
}
</style>
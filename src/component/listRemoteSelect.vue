<template>
  <div>
    <select-input
      v-model="value"
      ref="list"
      :data="list"
      :placeholder="getPlaceHolder()"
      @search="getList"
    ></select-input>
  </div>
</template>
<script>
import selectInput from "@/component/select-input.vue";
import * as mapper from "@/config/mraper";
export default {
  name: "list-remote-select",
  components: {
    selectInput
  },
  props: {
    type: null,
  },
  data() {
    return {
      value: undefined,
      list: [],
      pageConfig: {
        current: 1,
        pageSize: 20
      }
    };
  },
  mounted() {
      debugger
    this.nameKey = mapper.getNameKey(this.type);
    this.getList()
  },
  methods: {
    getList() {
      axios.get("technology/list").then((data) => {
        // console.log(data, "data");
      })
    }
  }
};
</script>
<style scoped>
.dict {
  padding: 20px;
  border: 1px red solid;
  width: 600px;
  height: 400px;
}
</style>
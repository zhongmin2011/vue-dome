<template>
  <div class="childContent">
    <div style="padding:10px 0;">组件选择框</div>
    <a-select
      @change="handleChange"
      @select="handleSelect"
      v-model="selected"
      :filterOption="filterOption"
      :showArrow="true"
      :placeholder="placeholder"
      style="width:250px"
    >
      <a-select-option v-for="(item,index) in list" :key="index" :value="item.id">{{item.name}}</a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  props: {
    clearable: {
      default: true,
      type: Boolean
    },
    data: Array,
    value: null,
    filterOption: {
      default: false,
      type: Boolean
    },
    placeholder: String
  },
  data() {
    return {
      list: [],
      selected: ""
    };
  },
  mounted () {
    // clearable 是否需要清除即是否显示不限 option，默认为 true
    this.list = this.clearable ? [{ id: '', name: '不限' }, ...this.data] : [...this.data]
    this.selected = this.value
  },
  methods: {
    handleChange(value) {
      this.selected = value;
    },
    handleSelect(value) {
    }
  },
};
</script>
<style>
.ant-select-selection{
  border:1px solid #fff;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
}
</style>
<style  scoped>
.childContent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  background: #ceb8b8;
  width: 350px;
  height: 150px;
}
</style>
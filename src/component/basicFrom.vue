<template>
  <div>
    <div class="page" v-for="(order, index) in orderFormConfig" :key="index">
      <Collapse>
        <Panel name="1">
          {{order.title}}
          <div slot="content">
            {{orderFormList}}
            <CommonForm
              ref="commonform"
              v-if="isRefresh"
              :formConfig="order.formConfig"
              :column="order.column"
            ></CommonForm>
          </div>
        </Panel>
      </Collapse>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    orderFormConfig: {}
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
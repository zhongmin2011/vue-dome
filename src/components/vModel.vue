<template>
  <div class="v-model">
    <div>我的v-model页面</div>
    <div style="display:flex">
      <div>
        <div class="model__content">
          <div class="model__content--input">
            <div>我的 v-model 绑定 input 框</div>
            <input type="text" v-model="inputValue" @change="input(inputValue)" />
            <div>展示 input中值：{{inputValue}}</div>
          </div>
          <div class="model__content--input">
            <div>我的 v-model.trim 绑定 input 框</div>
            <input type="text" v-model.trim="valueTrim" @change="input(valueTrim)" />
            <div>展示 input中值：{{valueTrim}}</div>
          </div>
        </div>
        <div class="model__content">
          <div class="model__content--input">
            <div>我的 v-model 绑定 input 框</div>
            <input type="text" v-model="inputValue" />
            <div>展示 input中值：{{inputValue}}</div>
          </div>
          <div class="model__content--input">
            <div>我的 v-model.lazy 绑定 input 框</div>
            <input type="text" v-model.lazy="valueLazy" />
            <div>展示 input中值：{{valueLazy}}</div>
          </div>
        </div>
        <div class="model__content">
          <div class="model__content--input">
            <div>我的 v-model 绑定 input 框</div>
            <input type="text" v-model="inputValue" @change="input(inputValue)" />
            <div>展示 input中值：{{inputValue}}</div>
          </div>
          <div class="model__content--input">
            <div>我的 v-model.number 绑定 input 框</div>
            <input type="number" v-model.number="valueNumber" @change="input(valueNumber)" />
            <div>展示 input中值：{{valueNumber}}</div>
          </div>
        </div>
      </div>
      <div style="margin-left:30px;">
        <div class="model__content">
          <div class="model__content--input">
            <div>v-model绑定radio，单选时，只能绑定一个值sex</div>
            <label for="female">
              <input id="female" value="男" v-model="sex" type="radio" />男
            </label>
            <label for="male" style="margin-left:10px;">
              <input id="male" value="女" v-model="sex" type="radio" />女
            </label>
            <div>radio 值：{{sex}}</div>
          </div>
          <div class="model__content--input">
            <div>v-model绑定checkbox，多选时，绑定的是一个数组</div>
            <input value="苹果" v-model="fruit" type="checkbox" />苹果
            <input value="橘子" v-model="fruit" type="checkbox" />橘子
            <input value="西瓜" v-model="fruit" type="checkbox" />西瓜
            <input value="柚子" v-model="fruit" type="checkbox" />柚子
            <input value="荔枝" v-model="fruit" type="checkbox" />荔枝
            <input value="Mango" v-model="fruit" type="checkbox" />芒果
            <div>你喜欢吃的水果有：{{fruit}}</div>
          </div>
        </div>
        <div class="model__content">
          <div class="model__content--input">
            <div>v-model绑定select，只能绑定一个值</div>
            <select name="你喜欢的水果有" id="" v-model="value">
              <option value="西瓜">西瓜</option>
              <option value="柚子">柚子</option>
              <option value="荔枝">荔枝</option>
              <option value="芒果">芒果</option>
            </select>
            <div>喜欢的水果：{{value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      fruit: [],
      sex: "",
      inputValue: "",
      valueLazy: "",
      valueNumber: "",
      valueTrim: ""
    };
  },
  methods: {
    input(valueNumber) {
      console.log(valueNumber);
      console.log(typeof valueNumber);
    }
  }
};
</script>
<style scoped>
.v-model {
  padding: 10px;
}
.model__content--input {
  padding: 5px;
}
.model__content {
  margin-top: 10px;
  padding: 10px;
  border: 1px grey solid;
}
input[type="radio"] {
  margin: 0 10px 0 20px;
}
input[type="checkbox"] {
  margin: 0 10px 0 20px;
}
</style>
<template>
  <div class="content">
    <div>我是组件化容器界面</div>
    <div>1，首先，把改主页面中所有要展示的页面分别引入进去</div>
    <div class="blue">&nbsp;const cardSync={</div>
    <div class="blue">
      &nbsp;&nbsp;&nbsp;card1:() => import(/* webpackChunkName: "about" */
      './../component/card1.vue'),
    </div>
    <div class="blue">
      &nbsp;&nbsp;&nbsp;card2:() => import(/* webpackChunkName: "about" */
      './../component/card2.vue'),
    </div>
    <div class="blue">
      &nbsp;&nbsp;&nbsp;card3:() => import(/* webpackChunkName: "about" */
      './../component/card3.vue'),
    </div>
    <div class="blue">
      &nbsp;&nbsp;&nbsp;card4:() => import(/* webpackChunkName: "about" */
      './../component/card4.vue'),
    </div>
    <div class="blue">
      &nbsp;&nbsp;&nbsp;card5:() => import(/* webpackChunkName: "about" */
      './../component/card5.vue'),
    </div>
    <div class="blue">
      &nbsp;&nbsp;&nbsp;card6:() => import(/* webpackChunkName: "about" */
      './../component/card6.vue')
    </div>
    <div class="blue">&nbsp;}</div>
    <div class="blue">2，之后在页面中写如组件的展示元素：component</div>
    <div class="blue" v-text="msg" style="margin-left: 10px"></div>
    <div class="blue" style="margin-left: 10px">
      comment: 元素是控制展示那个组件的变量
    </div>
    <div class="blue">
      3，在js中，写方法，通过路由传参，判断要展示那个组件，方法如下：
    </div>
    <div class="blue" style="margin-left: 10px">type () {</div>
    <div class="blue" style="margin-left: 20px">for (let key in cardSync) {</div>
    <div class="blue" style="margin-left: 30px">if (key === this.$route.params.name) {</div>
    <div class="blue" style="margin-left: 40px">this.comment = cardSync[key]</div>
    <div class="blue" style="margin-left: 40px">console.log(this.comment)</div>
    <div class="blue" style="margin-left: 30px">}</div>
    <div class="blue" style="margin-left: 20px">}</div>
    <div class="blue" style="margin-left: 10px">}</div>
    <div class="blue">4，在进入改页面中，通过路由传参来进行判断</div>
    <div class="blue" v-text="link" style="margin-left: 10px">}</div>
    <div class="blue">5，详情请查看contain组件</div>
    <div style="padding：20px;margin-top:30px;">
        <div>我是容器组件展示内容</div>
      <component :is="comment">123</component>
    </div>
  </div>
</template>
<script>
//一个容器包含所有的组件
const cardSync = {
  card1: () =>
    import(/* webpackChunkName: "about" */ "./../component/card1.vue"),
  card2: () =>
    import(/* webpackChunkName: "about" */ "./../component/card2.vue"),
  card3: () =>
    import(/* webpackChunkName: "about" */ "./../component/card3.vue"),
  card4: () =>
    import(/* webpackChunkName: "about" */ "./../component/card4.vue"),
  card5: () =>
    import(/* webpackChunkName: "about" */ "./../component/card5.vue"),
  card6: () =>
    import(/* webpackChunkName: "about" */ "./../component/card6.vue"),
};

export default {
  name: "contain",
  props: {
    mekey: String,
  },
  data() {
    return {
      comment: "",
      msg: "<component :is='comment'></component>",
      link:"<router-link to='/contain/card3'>组件化容器</router-link>"
    };
  },
  created() {
    this.type();
  },
  methods: {
    type() {
      for (let key in cardSync) {
        if (key === this.$route.params.name) {
          this.comment = cardSync[key]
        }
      }
    },
  },
};
</script>
<style scoped>
.blue {
  color: blue;
}
.content{
    padding: 20px;
}
</style>
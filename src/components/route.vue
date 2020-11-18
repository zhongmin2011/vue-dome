<template>
  <div class="routePage">
    <div>列表进入详情页的传参问题</div>
    <div class="routeNav">
      <div class="linkRoute" style="border:1px grey solid;padding:10px;">
        <div>router-link的三种传参方式</div>
        <div class="itemContent" style="margin-top: 10px">
          <div>
            <div>第一种传参方式：router-link to = '/' 字符串传参</div>
            <ul>
              <li>
                1,通过router-link to传值：<span class="blue"
                  >`:to="/route/routeOne/${name}"(动态传参)`</span
                >
              </li>
              <li>
                2,他的路由配置为：<span class="blue"
                  >path: '/route/routeOne/:name'</span
                >
              </li>
              <li>
                3,在要接受传参的页面中，直接通过<span class="blue"
                  >$route.params.name</span
                >展示传过来的字段
              </li>
              <li>4,此方法传参，页面刷新数据不会丢失</li>
            </ul>
            <div class="route">
              <router-link to="/route/routeOne/我是第一路由传过来的参数"
                >我是第一个路由传的第一个参数</router-link
              >
              <router-link to="/route/routeOne/我是第二路由传过来的参数"
                >我是第一个路由传的第二个参数</router-link
              >
            </div>
          </div>
        </div>
        <div class="itemContent">
          <div>
            <div>
              第二种传参方式：router-link to = {path,query} 通过对象path传参
            </div>
            <ul>
              <li>
                1,通过router-link to传值：<span class="blue"
                  >`:to = {path:'routeTwo', query:{code:1}}`</span
                >
              </li>
              <li>
                2,他的路由配置为：<span class="blue"
                  >path: '/route/routeTwo'</span
                >
              </li>
              <li>
                3,在要接受传参的页面中，直接通过<span class="blue"
                  >$route.query.code</span
                >展示传过来的字段
              </li>
              <li>4,查询参数搭配query，刷新页面数据不会丢失</li>
            </ul>
            <div class="route">
              <router-link :to="{ path: '/route/routeTwo', query: { code: 1 } }"
                >我是第二个路由传的第一个参数</router-link
              >
              <router-link :to="{ path: '/route/routeTwo', query: { code: 2 } }"
                >我是第二个路由传的第二个参数</router-link
              >
            </div>
          </div>
        </div>
        <div class="itemContent">
          <div>
            <div>
              第三种传参方式：router-link to = {name,params} 通过对象name传参
            </div>
            <ul>
              <li>
                1,通过router-link to传值：<span class="blue"
                  >`:to = {name:'routeThree', params:{code:1}}`</span
                >
              </li>
              <li>
                2,他的路由配置为：<span class="blue"
                  >name:'routeThree'(此处是通过那么传参，所以不用到path)</span
                >
              </li>
              <li>
                3,在要接受传参的页面中，直接通过<span class="blue"
                  >$route.params.code</span
                >展示传过来的字段
              </li>
              <li>4,命名路由搭配params，刷新页面参数会丢失</li>
              <li>
                5,<span class="blue"
                  >点击数据时，传参数据不会实时更新，除非该组件被重新渲染</span
                >
              </li>
            </ul>
            <div class="route">
              <router-link :to="{ name: 'routeThree', params: { code: 1 } }"
                >我是第三个路由传的第一个参数</router-link
              >
              <router-link :to="{ name: 'routeThree', params: { code: 2 } }"
                >我是第三个路由传的第二个参数</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="thisRoute"  style="border:1px grey solid;padding:10px;">
        <div>$route的三种传参方式</div>
        <div class="itemContent" style="margin-top: 10px">
          <div>
            <div>第一种传参方式：$route 直接传参</div>
            <ul>
              <li>
                1,通过$route.name传值：<span class="blue"
                  >`@click="$router.push({path: '/route/routeSix/${id}'})"</span
                >
              </li>
              <li>
                2,他的路由配置为：<span class="blue"
                  >path:
                  '/route/routeSix/:id'(此处是可以接受id值进行传参的)</span
                >
              </li>
              <li>
                3,在要接受传参的页面中，直接通过<span class="blue"
                  >this.$route.params.id</span
                >展示传过来的字段
              </li>
              <li>4,命名路由搭配params，刷新页面参数不会丢失</li>
            </ul>
            <div class="route">
              <div
                class="roteLink"
                @click="$router.push({ path: '/route/routeSix/123' })"
              >
                我是第六个路由传的第一个参数
              </div>
              <div
                class="roteLink"
                @click="$router.push({ path: '/route/routeSix/234' })"
              >
                我是第六个路由传的第二个参数
              </div>
            </div>
          </div>
        </div>
        <div class="itemContent">
          <div>
            <div>第二种传参方式：$route.query 通过对象query传参</div>
            <ul>
              <li>
                1,通过$route.query传值：<span class="blue"
                  >`@click="$router.push({ path: '/route/routeFor', query: {
                  code: 1 }})"</span
                >
              </li>
              <li>
                2,他的路由配置为：<span class="blue"
                  >path: '/route/routeFor'</span
                >
              </li>
              <li>
                3,在要接受传参的页面中，直接通过<span class="blue"
                  >$route.query.code</span
                >展示传过来的字段
              </li>
              <li>4,命名路由搭配query，刷新页面参数会丢失</li>
            </ul>
            <div class="route">
              <div
                class="roteLink"
                @click="
                  $router.push({ path: '/route/routeFor', query: { code: 1 } })
                "
              >
                我是第四个路由传的第一个参数
              </div>
              <div
                class="roteLink"
                @click="
                  $router.push({ path: '/route/routeFor', query: { code: 2 } })
                "
              >
                我是第四个路由传的第二个参数
              </div>
            </div>
          </div>
        </div>
        <div class="itemContent">
          <div>
            <div>第三种传参方式：$route.name 通过对象name传参</div>
            <ul>
              <li>
                1,通过$route.name传值：<span class="blue"
                  >`@click="$router.push({ name: 'routeFive', params: { code: 1
                  }})"</span
                >
              </li>
              <li>
                2,他的路由配置为：<span class="blue"
                  >name: 'routeFive'(因为此处是name传参，所以不用path)</span
                >
              </li>
              <li>
                3,在要接受传参的页面中，直接通过<span class="blue"
                  >$route.params.code</span
                >展示传过来的字段
              </li>
              <li>4,命名路由搭配params，刷新页面参数会丢失</li>
              <li>
                5,<span class="blue"
                  >点击数据时，传参数据不会实时更新，除非该组件被重新渲染</span
                >
              </li>
            </ul>
            <div class="route">
              <div
                class="roteLink"
                @click="
                  $router.push({ name: 'routeFive', params: { code: 1 } })
                "
              >
                我是第五个路由传的第一个参数
              </div>
              <div
                class="roteLink"
                @click="
                  $router.push({ name: 'routeFive', params: { code: 2 } })
                "
              >
                我是第五个路由传的第二个参数
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="routeContent">
        <router-view></router-view>
      </div>
      <div class="explain">
        <div>补充说明：$router 与 $route 的区别</div>
        <div>
          this.$router 相当于一个全局的路由器对象，包含了很多属性和对象（比如
          history 对象），任何页面都可以调用其 push(), replace(), go() 等方法。
        </div>
        <div>
          this.$route 表示当前路由对象，每一个路由都会有一个 route
          对象，是一个局部的对象，可以获取对应的 name, path, params, query
          等属性。(所以我们传参时候，用的是$route)
        </div>
        <div>注：<span class="blue">如果提供了 path(query传参)，params(name传参) 会被忽略</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    pushState(paths) {
      this.$router.push({
        path: `/route/${paths}`,
      });
    },
  },
};
</script>
<style scoped>
.explain {
  margin: 20px 0 0 30px;
}
.bottom {
  display: flex;
}
.btnContent {
  display: flex;
}
.btn {
  margin-top: 18px;
  padding: 4px;
  border: 1px black solid;
  width: 200px;
  margin-right: 20px;
}
.routeItem {
  margin-top: 20px;
}
.routeNav {
  padding: 10px;
  display: flex;
}
.blue {
  color: blue;
}
.routeContent {
  margin-top: 20px;
  border: 1px black solid;
  padding: 15px;
  width: 400px;
  height: 150px;
}
.routePage {
  padding: 20px;
}
.routeNav a,
.roteLink {
  border: 1px green solid;
  margin-right: 15px;
  padding: 8px;
  display: flex;
}
ul {
  padding: 10px;
}
.route {
  display: flex;
}
.itemContent {
  display: flex;
  margin-top: 30px;
}
</style>
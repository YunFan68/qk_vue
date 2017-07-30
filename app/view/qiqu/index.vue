<style scoped lang='stylus'>
header {
   height: 100px;
   width: 100%;
   position: fixed;z-index: 90;
   background: #f79100 url(../../../resourse/img/header-bg-ui2.png) center top / 375.5px 62px no-repeat;
   ul {
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      li {
         float: left;
         width: 25%;
         line-height: 38px;
         height: 38px;
         text-align: center;
      }
      li.cur {
         color: red;
      }
   }
}
</style>
<template>
   <div>
      <!-- https://github.com/vuejs/vue-touch/tree/next vue2d touch事件 -->
      <header>
         <ul>
            <!-- <li v-for="item in tabNav" @click="routerGo(item)" :class="{cur : $route.name == item.title}">{{item.title}}</li> -->
            <v-touch tag="li" v-for="item in tabNav" v-on:tap="routerGo(item)" :class="{cur : $route.name == item.title}">{{item.title}}</v-touch>
            <!--  $route.name 去判断路由的名字 -->
         </ul>
      </header>
      <transition name="slide">
      <router-view></router-view>
   </transition>
   </div>
</template>
<script>

export default {
   data() {
         return {
            tabNav: [{
               title: "精选",
               url: "/qiqu/jingxuan"
            }, {
               title: "视频",
               url: "/qiqu/shipin"
            }, {
               title: "段子",
               url: "/qiqu/duanzi"
            }, {
               title: "发现",
               url: "/qiqu/faxian"
            }],
            
         }
      },
     
      methods: {
         routerGo(item) {
            router.push({
               "path": item.url
            })
         }
      },
      
}
</script>

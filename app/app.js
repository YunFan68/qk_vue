import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, { name: 'v-touch' });

Vue.use(VueLazyload, {
   preLoad: 0.6,
   loading: '../resourse/img/5-121204193R0-50.gif',
   attempt: 1
})
Vue.use(VueRouter)

const router = new VueRouter({
   routes: [{
      path: '/login',
      component: require("./view/home/login.vue")
   }, {
      path: '/qiqu',
      component: require("./view/qiqu/index.vue"),
      children: [{
         path: '/qiqu/jingxuan',
         name: "精选",
         component: require("./view/qiqu/jingxuan/index.vue")
      }, {
         path: '/qiqu/shipin',
         name: "视频",
         component: require("./view/qiqu/shipin/index.vue")
      }, {
         path: '/qiqu/duanzi',
         name: "段子",
         component: require("./view/qiqu/duanzi/index.vue")
      }, {
         path: '/qiqu/faxian',
         name: "发现",
         component: require("./view/qiqu/faxian/index.vue")
      }]
   }, {
      //路由重定向
      path: '*',
      redirect: '/qiqu/jingxuan'
   }]
});

new Vue({
   el: "#app",
   router,
   render: h => h(app)
});
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
})
window.router = router;

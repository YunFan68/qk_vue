<style scoped lang='stylus'>
.content {
   background: #ccc;
   width: 100%;
   padding: 10px 0px;
}

.box {
   width: 95%;
   margin: 5px auto 0 auto;
   background: #fff;
   div.header {
      overflow: hidden;
      padding: 5px 10px;
      box-sizing: border-box;
      * {
         float: left;
      }
      img {
         width: 40px;
         border-radius: 50%;
      }
      p {
         line-height: 40px;
         height: 40px;
      }
      span {
         display: block;
         float: right;
         height: 18px;
         width: 33px;
         border: 1px solid #333;
         font-size: 12px;
         text-align: center;
         line-height: 18px;
         color: #333;
         border-radius: 3px;
         margin-top: 10px;
         margin-right: 20px;
      }
   }
   div.footer {
      overflow: hidden;
      p {
         float: left;
         overflow: hidden;
         width: 30%;
         padding: 10px 0;
         img {
            width: 20px;
            float: left;
         }
         span {
            font-size: 12px;
            display: block;
            float: left;
            height: 20px;
            line-height: 20px;
            padding-right: 10px;
         }
      }
      p:last-child {
         float: right;
         width: 19%
      }
   }
}

.jingxuan section {
   position: relative;
   top: 100px;
}
</style>
<template>
   <div class="jingxuan">
      <section>
         <div>
            <swiper :swiperList="swiperList"></swiper>
         </div>
         <div class="content">
            <div class="box" v-for="item of morenshuju">
               <div class="header">
                  <img :src="item.avatar" alt="">
                  <p>{{item.user_name}}</p>
                  <span>举报</span>
               </div>
               <div class="main" v-for="child of item.media_data">
                  <!-- <img :src="child.wifi_img_url" alt=""> -->
                  <gif v-if="child.format == 'GIF'" :child="child"></gif>
                  <jpg v-if="child.format == 'JPEG'" :child="child"></jpg>
                  <png v-if="child.format == 'PNG'" :child="child"></png>
               </div>
               <div class="footer">
                  <p>
                     <span>
                        <img src="../../../../resourse/img/like.png">
                     </span>
                     <span>
                        {{item.like}}
                     </span>
                  </p>
                  <p>
                     <span>
                        <img src="../../../../resourse/img/dislike.png">
                     </span>
                     <span>
                        {{item.dislike}}
                     </span>
                  </p>
                  <p>
                     <span>
                        <img src="../../../../resourse/img/pinglun.png">
                     </span>
                     <span>
                        {{item.comment_total}}
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
import swiper from '../../../components/swiper.vue'
import gif from '../../../components/gif.vue'
import jpg from '../../../components/jpg.vue'
import png from '../../../components/png.vue'
export default {
   data() {
         return {
            swiperList: [{
               src: '../../../resourse/img/swiper/1.png',
               title: "奇趣APP搞笑短漫频道上线啦！"
            }, {
               src: '../../../resourse/img/swiper/2.jpeg',
               title: "毒贩遇警察查房，一个屁把毒品喷出来"
            }, {
               src: '../../../resourse/img/swiper/3.jpg',
               title: "100元话费白送你，想听你的心里话"
            }],
            morenshuju: []
         }
      },
      created() {
         this.routeGo();
      },
      watch: {
         // 如果路由有变化，会再次执行该方法
         '$route': 'routeGo'
      },
      components: {
         swiper,
         gif,
         jpg,
         png
      },
      methods: {
         routeGo() {
            console.log("路由切换了");
            var vm = this;
            $.get("../../../../data/data.json", function(data) {
               console.log(data);
               data.mapList.forEach((item) => {
                  vm.morenshuju.push({
                     title: item.title,
                     avatar: item.avatar,
                     user_name: item.user_name,
                     dislike: item._incrs.dislike,
                     like: item._incrs.like,
                     comment_total: item.comment_total,
                     media_data: item.media_data
                  })
               });
            });
         }
      }
}
</script>

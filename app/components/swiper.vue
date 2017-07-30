<style scoped lang='stylus'>
.swiper-slide {
   img {
      width: 100%;
   }
}

.vui-swiper-slide {
   position: relative;
   p {
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      text-align: center;
      line-height: 20px;
      height: 40px;
      width: 100%;
      color: #fff;
      font-size: 0.75em;
   }
}

.vui-swiper-pagination {
   bottom: 0;
}
</style>
<template>
   <div class="swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide vui-swiper-slide" v-for="item in swiperList">
            <img :src="item.src">
            <p>{{item.title}}</p>
         </div>
      </div>
      <div class="swiper-pagination vui-swiper-pagination"></div>
   </div>
</template>
<script>
import Swiper from '../../resourse/lib/swiper-3.4.2.min.js'
export default {
   props: ["swiperList"],
   mounted() {
      var mySwiper = new Swiper('.swiper-container', {
         loop: true,
         pagination: '.swiper-pagination'
      })
   }
}
</script>

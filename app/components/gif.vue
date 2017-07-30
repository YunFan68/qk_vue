<style scoped lang='stylus'>
.gif {
   position: relative;
   img{
   	width: 100%;
   }
}

.play {
   width: 50px;
   height: 50px;
   border-radius: 999px;
   background: #fff;
   color: #000;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: center;
   line-height: 50px;
}
</style>
<template>
   <div class="gif">
      <!-- <p class="play" @click="play" v-if="isShowPlay">GIF</p> -->
      <!-- 注意这个tag 里面就是你想要的标签的名字 -->
      <v-touch tag="p" class="play" v-on:tap="play"  v-if="isShowPlay">GIF</v-touch>
      <img v-lazy="child.wifi_img_url" alt="">
   </div>
</template>
<script>
export default {
   props: ["child"],
   data() {
      return {
         isShowPlay: true
      }
   },
   methods: {
      play() {
         this.child.wifi_img_url = this.child.origin_img_url.origin_pic_url;
         this.isShowPlay = false;
      }
   }
}
</script>

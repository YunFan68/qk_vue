<style scoped lang='stylus'>
		img {
		   width: 100%;
		}
</style>
<template>
   <div class="jpg">
      <img v-lazy="child.wifi_img_url" alt="">
   </div>
</template>
<script>
export default {
   props: ["child"],
   data() {
      return {

      }
   }
}
</script>

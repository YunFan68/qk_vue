<style scoped lang='stylus'>
	 .video{
	 	position: relative;
    	top: 100px;

	 }
	 video{
    		width: 100%;
    	}
</style>
<template>
	<div class="video">
		<div class="content" v-for="item of videoList">
			<p>
				{{item.title}}
			</p>
			<video controls="controls" :src="item.src" poster="../../../../resourse/img/poster.png"></video>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				videoList:[{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				},{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				},{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				},{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				},{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				},{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				},{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				},{
					title:"haha",
					src:"../../../../resourse/video/梦想.mp4"
				}]
			}
		}
	}
</script>
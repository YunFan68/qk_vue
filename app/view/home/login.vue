<style scoped lang='stylus'>
	button{
		display: block;
		width: 100px;height: 30px;text-align: center;line-height: 30px;margin: 100px auto;border: 1px solid #333;outline: none;
	}
</style>
<template>
	<div>
		<button @click="routerGo">登陆按钮</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			routerGo(){
				console.log(router);
				router.push({"path" : "/qiqu"})
			}
		}
	}
</script>
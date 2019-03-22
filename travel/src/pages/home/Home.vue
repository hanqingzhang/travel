<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
	</div>
	
</template>
<script >
import HomeHeader from './componets/Header'
import HomeSwiper from './componets/Swiper'

export default{
	name:'Home',
	components:{
		HomeHeader,//es6中键和值相等可省略
		HomeSwiper
		
	}
}
	
</script>
<style >
	
</style>
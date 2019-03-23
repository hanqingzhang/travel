<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>
	
</template>
<script >
import HomeHeader from './componets/Header'
import HomeSwiper from './componets/Swiper'
import HomeIcons from './componets/Icons'

export default{
	name:'Home',
	components:{
		HomeHeader,//es6中键和值相等可省略
		HomeSwiper,
		HomeIcons
		
	}
}
	
</script>
<style >
	
</style>
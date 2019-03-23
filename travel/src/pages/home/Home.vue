<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
	
</template>
<script >
import HomeHeader from './componets/Header'
import HomeSwiper from './componets/Swiper'
import HomeIcons from './componets/Icons'
import HomeRecommend from './componets/Recommend'
import HomeWeekend from './componets/Weekend'

export default{
	name:'Home',
	components:{
		HomeHeader,//es6中键和值相等可省略
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
		
	}
}
	
</script>
<style >
	
</style>
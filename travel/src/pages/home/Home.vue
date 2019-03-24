<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
	
</template>
<script >
import HomeHeader from './componets/Header'
import HomeSwiper from './componets/Swiper'
import HomeIcons from './componets/Icons'
import HomeRecommend from './componets/Recommend'
import HomeWeekend from './componets/Weekend'
import axios from 'axios'

export default{
	name:'Home',
	components:{
		HomeHeader,//es6中键和值相等可省略
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
		
	},
	data(){
		return{
			city:'',
			swiperList:[],
			recommendList:[],
			iconList:[],
			weekendList:[]
		}

	},
	methods:{
		//在methods中经常使用到“this”关键字，该关键字指向Vue组件实例。
		getHomeInfo(){
			//axios返回的结果是promise对象
			axios.get('/api/index.json').then(this.getHomeInfoSucc)

		},
		getHomeInfoSucc(res){
			res=res.data;
			if(res.ret&&res.data){
				const data=res.data
				this.city=res.city
				this.swiperList=data.swiperList
				this.recommendList=data.recommendList
				this.iconList=data.iconList
				this.weekendList=data.weekendList

			}
			console.log(res);

		}

	},
	mounted(){
		//在Vue所有的生命周期钩子方法（如created，mounted， updated以及destroyed）里使用this，this指向调用它的Vue实例
		this.getHomeInfo();

	}
}
	
</script>
<style >
	
</style>
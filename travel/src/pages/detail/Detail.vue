<template>
	<div>
		<detail-banner
		:sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"></detail-banner>
	    <detail-header></detail-header>
	    <div class="content">
	    	<detail-list :list="list"></detail-list>
	    </div>
		
	</div>
</template>
<script type="text/javascript">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default{
	//组件中name的作用，1.递归组件需要2.对某个页面取消缓存3.调试显示vue组件名字
	name: 'Detail',
  	components: {
	    DetailBanner,
	    DetailHeader,
	    DetailList
	    
	  },
	data(){
		return{
			  sightName: '',
		      bannerImg: '',
		      gallaryImgs: [],
		      list: []

		}
	},
	methods:{
		getDetailInfo(){
			//获取动态路由的ID
			axios.get('/api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.handleGetDataSucc)

		},
		handleGetDataSucc(res){
			res = res.data
			 if (res.ret && res.data) {
		        const data = res.data
		        this.sightName = data.sightName
		        this.bannerImg = data.bannerImg
		        this.gallaryImgs = data.gallaryImgs
		        this.list = data.categoryList
		      }
	
		}

	},
	mounted(){
		this.getDetailInfo();

	}
}
	
</script>
<style type="text/css" scoped lang="stylus">

.content
  height:50rem
  
	
</style>
<template>
	<div class="wrapper">
	<swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
    	<img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
 
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
  </div>
	
</template>
<script type="text/javascript">
export default{
	name:'HomeSwiper',
	data:function(){
		//因为组件是要共享的，但他们的data是私有的，所以每个组件都要return一个新的data对象
		return{
			swiperOption:{
				pagination:'.swiper-pagination',
				//轮播插件支持循环轮播
				loop:true

			},
			swiperList:[{
				id: '0001',
				imgUrl: require('./../../../assets/1.jpg')

			},{
				id: '0002',
				imgUrl: require('./../../../assets/2.jpg')

			}]

		}

	}
}	
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active 
   background:#fff
.wrapper
   width:100%
   height:0
   padding-bottom:31.25%
   overflow:hidden
   background:#eee
   .swiper-img
     width:100%
	
</style>
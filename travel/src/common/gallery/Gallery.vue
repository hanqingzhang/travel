<template>
	<div class="container" @click="handleGalleryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
    		
		    <swiper-slide v-for="(item,index) in imgs" :key="index">
		    	<img class="gallery-img" :src="item" >
		    </swiper-slide>
		   
		    <!-- Optional controls -->
   	         <div class="swiper-pagination"  slot="pagination"></div>
		 
		    
		    

		  </swiper>
		</div>
		
	</div>
	
</template>
<script type="text/javascript">
export default{
	name:'CommonGallery',
	data(){
		return{
			swiperOption:{
				pagination:'.swiper-pagination',
				paginationType:'fraction',
				observeParents:true,
				observer:true
			}
		}
	},
	props:{
		imgs:{
			type:Array,
			default(){
				return[]
			}

		}
	},
	methods:{
		handleGalleryClick(){
			this.$emit('close')

		}
	}
}
	
</script>
<style type="text/css" lang="stylus" scoped>
.container >>> .swiper-container
   overflow:inherit
.container
   display:flex
   flex-direction:column
   justify-content:center
   z-index:99
   position:fixed
   left:0
   top:0
   right:0
   bottom:0
   background:black
   .wrapper
     width:100%
     height:0
     padding-bottom:55%
     .gallery-img
        width:100%
     .swiper-pagination
        color:#fff
        bottom:-1rem


	
</style>
<template>
  <div class="list" ref="wrapper">
  	<div>
  	
		  	<div class="area">
		  		<div class="title border-topbottom">当前城市</div>
		  		<div class="button-list">
		  			<div class="button-wrapper">
		  				<div class="button">
		  					北京
		  				</div>
		  			</div>
		  		
		  		</div>
		  		
		  	</div>
		  	<div class="area">
		  		<div class="title border-topbottom">热门城市</div>
		  		<div class="button-list">
		  			<div class="button-wrapper" v-for="item of hot" :key="item.id">
		  				<div class="button">
		  					{{item.name}}
		  				</div>
		  			</div>
		  			
		  		</div>
		  		
		  	</div>
		  	<div class="area" v-for="(item,key) of cities" :key="key" :ref="key  " >
		  		<div class="title border-topbottom">{{key}}</div>
		  		<div class="item-list">
		  			<div class="item border-bottom" v-for="inneritem of item" :key="inneritem.id">
		  				{{inneritem.name}}
		  			</div>
		  		
		  		</div>
		  		
		  		
		  	</div>
    </div>
  </div>
</template>
<script type="text/javascript">
	import Bscroll from 'better-scroll'
	export default{
		name:'CityList',
		props:{
			hot:Array,
			cities:Object,
			letter:String

		},
		mounted(){
			//页面DOM挂载完毕后执行
			//创建实例属性sroll
			this.scroll=new Bscroll(this.$refs.wrapper);
		},
		watch:{
			//监听器，监听letter的变化
			letter(){
				//betterScroll提供的接口
				if(this.letter){
					//element是数组，不是dom元素和dom选择器
					//const element=this.$refs[this.letter]
					const element=this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)

				}

			}
		}

	}
</script>
<style type="text/css" lang="stylus" scoped>

 @import '~styles/varibles.styl'
 .border-topbottom
   &:before
     border-color:#ccc
   &:after
     border-color:#ccc
  .border-bottom
   &:before
     border-color:#ccc
  .list
     overflow:hidden
     position:absolute
     top:1.58rem
     left:0
     right:0
     bottom:0
   

	 .title
	   line-height: .54rem
	   background: #eee
	   padding-left:.2rem
	   color:#666
	   font-size:.26rem
	 .button-list
	   overflow:hidden
	   padding: .1rem .6rem .1rem .1rem
	   .button-wrapper
	      float:left
	      width:33.33%
	      .button
	         padding: .1rem 0
	         margin:.1rem
	         text-align:center
	         border: .02rem solid #ccc
	         border-radius: .06rem
	 .item-list
	    .item
	        line-height:.76rem
	        color:#666
	        padding-left:.2rem




</style>
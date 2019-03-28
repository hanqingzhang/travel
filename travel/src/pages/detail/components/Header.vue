<template>
  <div>
  	<router-link
     tag="div" 
     to="/" 
     class="header-abs"
     v-show="showAbs">
  		 <div class="iconfont header-abs-back">&#xe624;</div>  
  	</router-link>
  	<div 
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle">
  		景点详情
      <router-link to="/">
      <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>

  	</div>
    	
  </div>
	
</template>
<script type="text/javascript">

export default{
	name:'DetailHeader',
  data(){
    return{
      showAbs:true,
      opacityStyle:{
        opacity:0
      }

    }
  },
  methods:{
     handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }

  },
  mounted(){
     window.addEventListener('scroll',this.handleScroll)

  },
  activited(){
    //activated,deactivated这两个生命周期函数一定是要在使用了keep-alive组件后才会有的
    //使用看keep-alive,页面一旦被展示，activited就会被执行
    window.addEventListener('scroll',this.handleScroll)
  }
  
}
	
</script>
<style type="text/css" scoped lang="stylus">
@import '~styles/varibles.styl'
.header-abs
   position:absolute
   left:.2rem
   top:.2rem
   width:.8rem
   height: .8rem
   line-height: .8rem
   border-radius:.4rem
   text-align:center
   background:black
   .header-abs-back
      color:#fff
      font-size:.4rem
.header-fixed
   position:fixed
   top:0
   right:0
   left:0
   height:$headerHeight
   line-height: $headerHeight
   text-align:center
   color:#fff
   background:$bgColor
   font-size: .32rem
   .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff



</style>
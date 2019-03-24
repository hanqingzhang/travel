<template>
	<div class="header">
		<div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>  
    </div>
		<div class="header-input">
      <span class="iconfont">&#xe632;</span> 
    输入城市/景点/游玩主题
    </div>
    <router-link to='city'>
              <div class="header-right">
                <span class="iconfont arrow-icon">&#xe64a;</span> 
                    {{this.city}}
              </div>
      
    </router-link>

	</div>
</template>
<script >
export default{
	name:'HomeHeader',
  props:{
    city: String
  }
}
	
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .header
    display: flex
    background: $bgColor
    line-height: .86rem
    .header-left
      width: .64rem
      float: left
      .back-icon
         text-align:center
         font-size:.4rem
         color:white
    .header-input
      flex: 1
      background: #fff
      border-radius:.1rem
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      color:#ccc
    .header-right
      color:white
      float: right
      text-align: center
      width: 1.24rem
      .arrow-icon
        font-size:.24rem

</style>
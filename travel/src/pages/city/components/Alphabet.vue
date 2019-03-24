<template>
	<div>
		<ul class="list">
			<li class="item">A</li>
			<li class="item">A</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'CityAlphabet'
	}
</script>
<style type="text/css" lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
   display:flex
   flex-direction:column
   justify-content:center
   position:absolute
   top:1.58rem
   right:0
   bottom:0
   width: .4rem
   
   .item
      line-height:.4rem
      text-alien:center
      color:$bgColor
</style>
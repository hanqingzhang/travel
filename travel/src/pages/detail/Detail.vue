<template>
	<div>
		<detail-banner></detail-banner>
	    <detail-header></detail-header>
	    <div class="content"></div>
		
	</div>
</template>
<script type="text/javascript">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default{
	name: 'Detail',
  	components: {
	    DetailBanner,
	    DetailHeader
	    
	  },
}
	
</script>
<style type="text/css" scoped lang="stylus">

.content
  height:50rem
  
	
</style>
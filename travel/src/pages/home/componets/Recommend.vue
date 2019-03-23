<template>
	<div>
		<div class="recommend-title">
		热门推荐
	    </div>
	    <ul>
	    	<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
	    		<img class="item-img" :src="item.imgUrl">
	    		<div class="item-info">
	    			<p class="item-title">{{item.title}}</p>
	    			<p class="item-desc">{{item.desc}}</p>
	    			<button class="item-button">查看详情</button>
	    		</div>
	    	</li>
	    </ul>
		
	</div>
	
	
</template>
<script type="text/javascript">
	export default{
		name:'HomeRecommend',
		data(){
			return{
				recommendList:[{
					id:'001',
					imgUrl:require("./../../../assets/01.png"),
					title:'八达岭长城',
					desc:'八达岭长城，位于北京市延庆区军都山关沟古道北口。是中国古代伟大的防御工程万里长城的重要组成部分，是明长城的一个隘口。八达岭长城为居庸关的重要前哨，古称“居庸之险不在关而在八达岭”。'
				},{
					id:'002',
					imgUrl:require("./../../../assets/02.png"),
					title:'北京故宫',
					desc:'北京故宫是中国明清两代的皇家宫殿，旧称为紫禁城，位于北京中轴线的中心，是中国古代宫廷建筑之精华。北京故宫以三大殿为中心，占地面积72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。是世界上现存规模最大、保存最为完整的木质结构古建筑之一。'
				},{
					id:'003',
					imgUrl:require("./../../../assets/03.png"),
					title:'玉渊潭公园',
					desc:'玉渊潭公园，AAAA级景区，位于海淀区。东门与钓鱼台国宾馆相邻；西至西三环中路与中央电视塔隔路相望；南门在中华世纪坛正北方，北接海军总医院。'
				}
				]
			}
		}
	}
</script>
<style type="text/css" lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
   margin-top: .2rem
   line-height: .8rem
   background:#eee
   text-indent: .2rem
.item
   display:flex
   height:1.9rem
   overflow:hidden
   .item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
   .item-info
      flex:1
      padding:.1rem
      min-width:0
      .item-title
         line-height:.54rem
         font-size:.32rem
         ellipsis()
      .item-desc
         line-height: .4rem
         color:#ccc
         ellipsis()
      .item-button
         line-height:.44rem
         background:orange
         padding: 0 .16rem
         border-radius: .06rem
         margin-top:.2rem
         color:white



</style>
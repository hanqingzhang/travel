<template>
	<div class="icons">
	<swiper>
		<swiper-slide v-for="(page,index) of pages" :key="index">
		<div class="icon" v-for="item of page" :key="item.id">
			<div class="icon-img">
				<img class="icon-imgcontent" :src="item.imgUrl">
			</div>
			<p class="desc">{{item.desc}}</p>
		</div>
	    </swiper-slide>
	</swiper>

	</div>
</template>
<script >
export default{
	name:'HomeIcons',
	data(){
		return{
			iconList:[{
				id:'001',
				imgUrl: require('./../../../assets/a.png'),
				desc:'景点门票'

			},{
				id:'002',
				imgUrl:require('./../../../assets/b.png'),
				desc:'滑雪季'

			},{
				id:'003',
				imgUrl:require('./../../../assets/c.png'),
				desc:'泡温泉'
			},{
				id:'004',
				imgUrl:require('./../../../assets/d.png'),
				desc:'动植物园'
			},{
				id:'005',
				imgUrl:require('./../../../assets/e.png'),
				desc:'一日游'
			},{
				id:'006',
				imgUrl:require('./../../../assets/f.png'),
				desc:'必游榜单'
			},{
				id:'007',
				imgUrl:require('./../../../assets/g.png'),
				desc:'自然风光'
			},{
				id:'008',
				imgUrl:require('./../../../assets/h.png'),
				desc:'全部'
			},{
				id:'009',
				imgUrl:require('./../../../assets/i.png'),
				desc:'出国'
			}
			]

		}
	},
    computed: {
	    pages () {
	      const pages = []
	      this.iconList.forEach((item, index) => {
	        const page = Math.floor(index / 8)
	        if (!pages[page]) {
	          pages[page] = []
	        }
	        pages[page].push(item)
	      })
	      return pages
	    }
	  }

	
}
	
</script>
<style type="text/css" lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height:0
  padding-bottom:50%
.icons
  margin-top:.1rem

  .icon
     position:relative
     width:25%
     float:left
     padding-bottom:25%
     overflow:hidden
     height:0
     .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom: .44rem
        box-sizing:border-box
        padding: .1rem
        .icon-imgcontent
           height:100%
           display:block
           margin:0 auto
    .desc
        position:absolute
        left:0
        right:0
        bottom:0
        height:.44rem
        line-heigh:.44rem
        color:$darkTextColor
        text-align:center
        ellipsis()

</style>
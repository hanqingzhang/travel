<template>
  <div>
          <div class="search">
          	
          	<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
          </div>
          <div class="search-content" ref="search" v-show="keyword">
            <ul>
              <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
              <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
              </li>
            </ul>
            
          </div>
  </div>
</template>
<script type="text/javascript">
  import Bscroll from 'better-scroll'
	export default{
		name:'CitySearch',
    data(){
      //input中的值和数据绑定
      return{
        keyword:'',
        list:[],
        timer:null
      }
    },
    props:{
      cities:Object
    },
    computed:{
      //将模板中的逻辑，需要计算的放入此
      hasNoData(){
        return !this.list.length

      }

    },
     mounted ()
      {
            this.scroll = new Bscroll(this.$refs.search)
       },
    watch:{
      //监听器，监听keyword的改变
      keyword(){
        if(this.timer){
         
          clearTimeout(this.timer)

        }
        if (!this.keyword) 
        {
            this.list = []
            return 
         }
        //返回一个 ID（数字），可以将这个ID传递给 clearTimeout() 来取消执行。
        //keyword改变100毫秒后，箭头函数执行
        this.timer=setTimeout(()=>{
          const result=[]
          //查找，在city.json中查找keyword
         for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
          //list存储保护关键词的city
          this.list=result

        },100)
      }
    }
	}
</script>
<style type="text/css" lang="stylus" scoped>

 @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
   .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666

</style>
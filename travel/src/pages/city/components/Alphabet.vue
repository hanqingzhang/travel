<template>
	<div>
		<ul class="list" >
			<li 
         class="item" 
         v-for="item of letters"
         :key="item"
         :ref="item"
         @click="handleLetterClick"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd">
      {{item}}
   </li>
			
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'CityAlphabet',
      props:{
         cities:Object
      },
      data(){
         return{
            touchStatus:false,
            startY:0,
            timer:null

         }
         

      },
      //初次渲染组件和是通过父组件中的data数据渲染的
      //ajax获取完数据后,cities的值才获取到，Alphabet组件才渲染出来
      //当往Alphabet内传递的数据变化时，这个组件会重新渲染，updated执行
      updated(){
         //页面数据更新，页面完成自己的渲染后，这个钩子函数执行
         //获取A元素距离绿色下沿的高度
         this.startY=this.$refs['A'][0].offsetTop;

      },
      computed:{
         letters () {
         const letters = []
         for (let i in this.cities) {
           letters.push(i)
         }
         return letters
       }

      },
      methods:{
         //click在元素被点击时发生
         handleLetterClick(e){
            //向外触发事件,change事件名，e.target.innerText事件的携带内容
            this.$emit('change',e.target.innerText)
            console.log(e.target.innerText)

         },
         //touchstart,当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发
         handleTouchStart(){
            this.touchStatus=true

         },
         //touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
         handleTouchMove(){
            if(this.touchStatus){
               //touches[0]手指信息，距离顶部高度，减去79，得到距离绿色底部的高度
               if(timer){
                  //clearTimeout() 方法可取消由 setTimeout() 方法设置的 timeout。
                  clearTimeout(this.timer)
               }
               this.timer=setTimeout(()=>{
                     const touchY=e.touches[0].clientY-79;
               //手指滑动位置对应字母的下标
                     const index=Math.floor((touchY-this.startY)/20);
                     if(index>=0 && index<this.letters.length)
                     {
                        this.$emit('change',this.letters[index])

                     }

               },16)
            
         }

         },
         //touchend事件：当手指从屏幕上离开的时候触发。
         handleTouchEnd(){
            this.touchStatus=false;


         }

      }
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
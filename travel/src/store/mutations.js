export default{
	changeCity(state,city){
			state.city=city
			//公用数据中的city等于传入的city
			//用户修改state的city时，同时存储到本地，下次访问时继续可以使用
			try{
				localStorage.city=city

			}catch(e){

			}
			

		}
}
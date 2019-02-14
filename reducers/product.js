//2.仓库里面有数据吗，现在没有数据，存储数据的地方在reducer
function product(state={lists:[]},action){
    switch(action.type){
       case'GETLIST': 
        //console.log(action.data)
          return {...state,lists:action.data}
        default: 
          return state;
    }
}
export default product;
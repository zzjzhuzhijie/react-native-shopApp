//2.仓库里面有数据吗，现在没有数据，存储数据的地方在reducer
function counter(state={counter:0,counter1:10},action){
    switch(action.type){
        case'INCREASE': 
        //   return {counter:state.counter+1}
        // return Object.assign({},state,{counter:state.counter+1})
        return {...state,counter:state.counter+1}
        case'DECREASE': 
        //   return {counter1:state.counter1-1}
        //   return Object.assign({},state,{counter1:state.counter1-1})
          return {...state,counter1:state.counter1-1}
       
        default: 
          return state;
    }
}
export default counter;
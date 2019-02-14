var initialState={
    update:0
}


function update(state=initialState,action){
    switch(action.type){
        case'INCREASEUPDATE':
        //   return {counter:state.counter+1}
        // return Object.assign({},state,{counter:state.counter+1})
        return {...state,update:state.update+1}
        default:
          return state;
    }
}
export default update;
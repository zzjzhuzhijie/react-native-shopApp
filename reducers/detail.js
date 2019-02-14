function detail(state={numOne:1},action){
    switch(action.type){
        case('CL_ONE'): 
            state.numOne = 1
            return {...state,numOne:state.numOne}
        case('ADD_ONE'): 
             if(state.numOne>99){
                state.numOne = 99
            }else{
                state.numOne += 1;
            }
            return {...state,numOne:state.numOne}
        case('DE_ONE'): 
            if(state.numOne<=1){
                state.numOne = 1
            }else{
                state.numOne -= 1;
            }
            return {...state,numOne:state.numOne}
        case('XG_ONE'): 
        if(!isNaN(action.payload)){
            if(action.payload>99){
                state.numOne = 99
            }else if(action.payload<1){
                state.numOne = 1
            }else{
                state.numOne = action.payload;
            }
        }else{
            state.numOne = state.numOne;
        }   
        return {...state,numOne:state.numOne}
        default: 
        return state
    }
}
export default detail;
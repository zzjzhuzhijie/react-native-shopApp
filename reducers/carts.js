import _ from 'lodash';
var initialState = [];
function carts(state=initialState,action){
    switch(action.type){
        case 'CHECK_ALL_YES': 
        var pos = _.findIndex(state,{id:action.payload.id})
        if(pos!=-1){
                 state[pos].checkBool = true;
                 return [...state]
        }else{
            return[...state,{...action.payload,quantity:action.db,checkBool:true}]
        }
        case 'CHECK_ALL_NO': 
        var pos = _.findIndex(state,{id:action.payload.id})
        if(pos!=-1){
                 state[pos].checkBool = false;
                 return [...state]
        }else{
            return[...state,{...action.payload,quantity:action.db,checkBool:true}]
        }
     case 'CHANGE_CHECK':{
        var pos = _.findIndex(state,{id:action.payload.id})
         if(pos!=-1){
                  state[pos].checkBool = !state[pos].checkBool;
                  return [...state]
         }else{
             return[...state,{...action.payload,quantity:action.db,checkBool:true}]
         }
     }
     case 'ADD_CART': 
           var pos = _.findIndex(state,{id:action.payload.id})
            if(pos!=-1){
                     state[pos].quantity = Number(state[pos].quantity)+action.db;
                     return [...state]
            }else{
                return[...state,{...action.payload,quantity:action.db,checkBool:true}]
            }
             case 'DE_CART': 
             var pos = _.findIndex(state,{id:action.payload.id});
             if(pos!=-1){
                state[pos].quantity = state[pos].quantity-1;
                return [...state]
             }else{
                return[...state,{...action.payload,quantity:1}]
             }
               /*var pos = _.findIndex(state,{id:action.payload.id});
                if(pos!=-1){
                         state[pos].quantity = state[pos].quantity-1;
                         if(state[pos].quantity<=0){
                            Alert.alert(
                                "是否从购物车移除？",
                                [
                                  {text: '确定', onPress: () => state.splice(pos,1)},
                                  {text: '取消', onPress: () => state[pos].quantity = 0, style: 'cancel'},
                                ],
                                { cancelable: false }
                              )                 
                         }
                         return [...state]
                }else{              
                    return[...state,{...action.payload,quantity:1}]
                } */
                case 'ADD_CART_SHOP': 
                var pos = _.findIndex(state,{id:action.payload.id});
                    if(pos!=-1){
                        state[pos].quantity = Number(state[pos].quantity)+1;
                        return [...state]
                    }else{
                        return[...state,{...action.payload,quantity:1}]
                    }
                case 'DE_CART_YES': 
                    var pos = _.findIndex(state,{id:action.payload.id});
                    if(pos!=-1){
                        state.splice(pos,1)
                    return [...state]
                    }else{
                        return[...state,{...action.payload,quantity:1}]
                    }
                  
                case 'DE_CART_NO': 
                var pos = _.findIndex(state,{id:action.payload.id});
                    if(pos!=-1){
                        state[pos].quantity = 0
                        return [...state]
                    }else{
                        return[...state,{...action.payload,quantity:1}]
                    }
                    
                case 'REMOVE_CART': 
                   var pos = _.findIndex(state,{id:action.payload.id});
                    if(pos!=-1){
                        state.splice(pos,1)
                        /* Alert.alert(
                            "是否从购物车移除？",
                            [
                              {text: '确定', onPress: () => state.splice(pos,1) },
                              {text: '取消', onPress: () => null},
                            ],
                            { cancelable: false }
                          )     */
                             return [...state]
                    }else{
                                      
                    return[...state,{...action.payload,quantity:1}]
                    }
                    case 'OPTION_CART_NUM': 
                    var pos = _.findIndex(state,{id:action.payload.id});
                    if(pos!=-1){
                        if(!isNaN(action.ev)){
                            if(action.ev>99){
                                state[pos].quantity = 99
                            }else if(action.ev<1){
                                state[pos].quantity = 1
                            }else{
                                state[pos].quantity = action.ev;
                            }
                        }else{
                            state[pos].quantity = state[pos].quantity;
                        }
                        return [...state]
                    }else{
                        return[...state,{...action.payload,quantity:1}]
                    }

            
        default: 
        return state
    }
    
}


export default carts ;
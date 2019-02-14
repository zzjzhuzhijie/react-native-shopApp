export const addCart=(data,db)=>{
    return{
        type   : 'ADD_CART',
        payload: data,
        db
    }
}
export const deCart=(data)=>{
    return{
        type   : 'DE_CART',
        payload: data,
    }
}

export const removeCart=(data)=>{
    return{
        type   : 'REMOVE_CART',
        payload: data
    }
}

export const deCartYes=(data)=>{
    return{
        type   : 'DE_CART_YES',
        payload: data,
    }
}

export const deCartNo=(data)=>{
    return{
        type   : 'DE_CART_NO',
        payload: data,
    }
}

export const addCartShop=(data)=>{
    return {
        type   : 'ADD_CART_SHOP',
        payload: data,
    }
}

export const optionCartNum=(data,ev)=>{
    return {
        type   : 'OPTION_CART_NUM',
        payload: data,
        ev
    }
}

export const chengeCheck=(data)=>{
    return {
        type   : 'CHANGE_CHECK',
        payload: data,
    }
}

export const checkAllNo=(data)=>{
    return {
        type   : 'CHECK_ALL_NO',
        payload: data,
    }
}

export const checkAllYes=(data)=>{
    return {
        type   : 'CHECK_ALL_YES',
        payload: data,
    }
}



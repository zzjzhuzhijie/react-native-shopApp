export const addone=()=>{
    return{
        type: 'ADD_ONE',
    }
}

export const deone=()=>{
    return{
        type: 'DE_ONE',
        /* payload: data */
    }
}


export const xgone=(data)=>{
    return{
        type   : 'XG_ONE',
        payload: data
    }
}

export const clone=()=>{
    return{
        type: 'CL_ONE',
    }
}

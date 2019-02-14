import React from 'react';

//es7 异步操作语法
const urlPrefix             = 'http://192.168.1.101:3000/';
const apiGetAllFlatListData = urlPrefix+`product?_sort=id`

export const getAllFlatListData=async()=>{
    try{
        let response     = await fetch(apiGetAllFlatListData);
        let responseData = await response.json();
        return responseData;
    }catch(error){
        console.log(error)
    }
}

export const getPageFlatListData=async (params={page:1})=>{
    try{
        let response     = await fetch(apiGetAllFlatListData+'&_limit=6&_page='+params.page);
        let responseData = await response.json();
        return responseData;
    }catch(error){

    }
}
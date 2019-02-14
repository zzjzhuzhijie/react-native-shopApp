import React from 'react';

//es7 异步操作语法
const urlPrefix             = 'http://10.31.161.252:3000/';
const apiGetAllFlatListData = urlPrefix+`people?_sort=id`

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
        let response     = await fetch(apiGetAllFlatListData+'&_limit=5&_page='+params.page);
        let responseData = await response.json();
        return responseData;
    }catch(error){

    }
}
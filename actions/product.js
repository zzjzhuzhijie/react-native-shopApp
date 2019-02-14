import axios from "axios";
export const getListData=(data)=>{
    return {
        type: "GETLIST",
        data: data
    }
} 
//真正做ajax请求
//1.现在有一个fetchList的函数，他的参数为一个dispatch函数，他返回这个函数
//2.在这个返回的函数中进行了一次ajax请求，ajax请求的数据为data
//3.利用1中的dispatch这一个参数进行派发操作(由此可见dispatch这个参数，其实他是一个函数)，派发的内容是之前所定义的getListData这一个函数，并且将ajax获取的内容做以参数进行传递   
export function fetchList(params={page:1}){
    return (dispatch)=>{
        const url = `http://10.31.161.252:3000/product?_page=${params.page}&_limit=5`;
            axios({
                url   : url,
                method: 'get'
            }).then(res=>{
                var jsonData={
                    total: +res.headers['x-total-count'],
                    rows : res.data
                }
                dispatch(getListData(jsonData))
            })
        
    }
}
export const  increase=()=>{
    return{
        type:'INCREASE'
    }
  } 
export const  decrease=()=>{
    return{
        type:'DECREASE'
    }
  }
  //只做参数传递及派发操作
// export const getListData=(data)=>{
//     console.log('getListData')
//     return {
//         type:"GETLIST",
//         data:data
//     }
// } 
// //真正做ajax请求
// //1.现在有一个fetchList的函数，他的参数为一个dispatch函数，他返回这个函数
// //2.在这个返回的函数中进行了一次ajax请求，ajax请求的数据为data
// //3.利用1中的dispatch这一个参数进行派发操作(由此可见dispatch这个参数，其实他是一个函数)，派发的内容是之前所定义的getListData这一个函数，并且将ajax获取的内容做以参数进行传递   
// export function fetchList(){
//     console.log('fetchList')
//     return (dispatch)=>{
//         const url="http://localhost:3000/product";
//         return fetch(url)
//         .then(res=>{
//             return res.json();
//         })
//         .then(data=>{
//             dispatch(getListData(data));
// })
        
//     }
// }
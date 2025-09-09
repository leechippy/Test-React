import { createStore,combineReducers,applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

// const initailState={
//      showLabel:false,
//      dropdownName:'ALL'
// }

// const appreducer=(state=initailState,action)=>{
//       return{
//          showLabel:showLabel(state.showLabel,action),
//          dropdownName:dropdown(state.dropdownName,action)
//       }
//     // switch(action.type){ 
//     //     case 'showlabel':
//     //          return {
//     //             ...state,
//     //             showLabel:action.payload
//     //          }
//     //          case 'dropdown':
//     //              return {
//     //                 ...state,
//     //                 dropdownName:action.payload
//     //              }
//     //          default: 
//     //          return state

//     //  }
//   }
  const showLabel=(state=true,action)=>{
    switch(action.type){
        case 'showlabel':
             return  action.payload
              default: 
             return state

     }
    }
      const dropdown=(state="ALL",action)=>{
    switch(action.type){
        case 'dropdown':
             return action.payload
             
             default: 
             return state

     }
  }


  function dataInfo(state={
     data:[],
     isloading:false,
     error:""
  },action){
       switch(action.type){
        case 'set-data':
           return {
            ...state,data:action.payload
           }
          case 'isloading':
          return {
            ...state,isloading:action.payload
          }
          case 'error':
            return {
            ...state,error:action.payload
          }
          default:
            return state
           
       }
  }

const labelDispatch=(value)=>{
        return {
              type:'showlabel',
             payload:value
         }
 }
 const dropdowndispache=(value)=>{
     return {
             type:'dropdown',
             payload:value
         }
 }

  function setData(data){
       return {
          type:'set-data',
          payload:data
       }
  }
  function setLoading(data){
      return {
         type:'isloading',
         payload:data
      }
  }
  function setError(data){
      return {
         type:'error',
         payload:data
      }
  }


   const appreducer=combineReducers({
      showLabel,
      dropdownName:dropdown,
      dataInfo
 })


// const store=createStore(appreducer,applyMiddleware(logger))
const store=createStore(appreducer,applyMiddleware(thunk))

//thunk pass arguments//

// const store = createStore(
//   appreducer,
//   applyMiddleware(thunk.withExtraArgument({
//   mode: 'development'
// }))
// );
   
 export  default store
 export {labelDispatch,dropdowndispache,setData,setLoading,setError}

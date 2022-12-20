import {configureStore} from "@reduxjs/toolkit";

const obj ={
    login:false
}

const redFunc = (state=obj,action)=>{

    if (action.type === "login") {
        return {
          ...state,
          login: true
        }
      }
    
      return state;
    };


const store = configureStore({
    reducer:{func: redFunc}
})


export default store;
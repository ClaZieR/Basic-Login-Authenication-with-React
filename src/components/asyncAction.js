const redux = require('redux')
const reduxtk = require('@reduxjs/toolkit')
const creatStore =redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const initialstate = {
    loggedin : false,
    error: ''
}

const fetch_user_succ = 'fetch_user_succ'
const fetch_user_fail = 'fetch_user_fail'


const fetchUserSucc = () => {
    return {
        type: fetch_user_succ
    }
}

const fetchUserFail = error => {
    return {
        type: fetch_user_fail,
        payload : error
    }
}

const reducer = (state=initialstate,action)=>{
    switch(action.type){
        case fetch_user_succ:
            return{
                loggedin : true,
                error:'',

            }
        case fetch_user_fail:
            return{
                loggedin : false,
                error:action.payload,
                
            }
    }
    
}



const fetchUser = () => {
    const obj = { 
        "email":"chamith@supersimple.com",
        "password":"chamith@123"
    }
    return function(dispatch){
        axios.post("https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login",obj)
        .then(response => {
            error=response.data.httpCode
            dispatch(fetchUserSucc(error))
        })
        
        .catch(error=> {
            dispatch(fetchUserFail(error.message))
        })
        
    }
}

const store = creatStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUser())
import React, { useState } from "react";
import {Button,Card,Input,Space,Form, Alert} from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
import { useSelector } from 'react-redux'


function Login(){
  const [uname, setUname] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate=useNavigate();

  const obj = { 
    "email":uname,
    "password":passwd
}

const postfunc  = ()  =>  {
const redux = require('redux')
const reduxtk = require('@reduxjs/toolkit')
const creatStore =redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default



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
    return function(dispatch){
        axios.post("https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login",obj)
        .then(response => {
          const error=response.data.httpCode
            dispatch(fetchUserSucc(error))
            Verify() //
        })
        
        .catch(error=> {
            dispatch(fetchUserFail(error.message))
        })
        
    }
}

const store = creatStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUser())
}
  
const Verify = () => {
  navigate('/dashboard')
  console.log()
  
}

    return(
      <div id="Maindiv">
        <div id="Subdiv1">
          <h4>Login</h4>
        </div>
        <hr className="Solid"></hr>
        <div id="Subdiv2">
          <Form>
            <Form.Item>
            <lable className="Lbltxt">Email</lable>
            <Input type="email" placeholder="input email" value={uname} onChange = {(e)=>setUname(e.target.value)} />
            </Form.Item>
            <Form.Item>
            <lable className="Lbltxt">Passowrd</lable>
            <Input.Password id="inp" placeholder="input password" value={passwd} onChange = {(e)=>setPasswd(e.target.value)} />
            </Form.Item>
            <Form.Item >
            <Button htmlType = "submit" block id="Btn" onClick={postfunc}>Login</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
}

export default Login;
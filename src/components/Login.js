import React, { useState } from "react";
import {Button,Card,Input,Space,Form, Alert} from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
import { useSelector,useDispatch } from 'react-redux'


function Login(){
  const [uname, setUname] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate=useNavigate();

  const obj = { 
    "email":uname,
    "password":passwd
  }

const login = useSelector((state)=>state.func.login)
const dispach=useDispatch();

const postfunc  = ()  =>  {
  setUname(uname)
  setPasswd(passwd)
  axios.post("https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login",obj)
  .then(response => verify(response))
  .catch(err => alert("user is invalid"))
  console.log(obj)
}
  
const verify = (response) => {
  const httpcode=response.data.httpCode
  if(httpcode==200){
    dispach({type:'login'})
    navigate('/dashboard')
    
  }
  else{
      return console.log("False")
  }
  
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
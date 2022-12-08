import './App.css';
import React,{useState} from 'react';
import Login from './components/Login';
import {BrowserRouter, BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'
import wlcm from './components/wlcm';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route element={PrivateRoutes()}>
        <Route exact path="/dashboard" element={wlcm()}/>
      </Route>
      </Routes>
    </div>
  )

}

export default App;
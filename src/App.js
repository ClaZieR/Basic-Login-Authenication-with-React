import './App.css';
import React,{useState} from 'react';
import Login from './components/Login';
import {BrowserRouter, BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'
import wlcm from './components/wlcm';

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={Login()}/>
      <Route exact path="/dashboard" element={wlcm()}/>
     </Routes>
    </div>
  )

}

export default App;

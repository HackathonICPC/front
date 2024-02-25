import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';

import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';

import AuthService from "./components/auth";

import { CookiesProvider, useCookies } from 'react-cookie'

import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';


// export const getProfileID = async()=>{
//   return axios.get(`http://127.0.0.1:8000/`);
// }

//<Route path='/courses/:id' element={<Course id=/>
function App() {
  async function getProfileID(){
    const response =  await axios.post(`http://127.0.0.1:8000/api/signin`);
    const items = response.data
    console.log(items)
    //axios.get(IP_ADRESS)
    //.then((response) =>{ console.log(response.status)})
  }
  //console.log(AuthService.getCurrentUser())
  return (
      <div>
      <Header/>
      <Sidebar/>
      <main id='main' class='main'>
        <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route path='/courses/' element={<Courses/>}/>
          <Route path='/login/' element={<Login/>}/>
          <Route path='/register/' element={<Register/>}/>
        </Routes>
      </main>
      </div>
  );

}

export default App;

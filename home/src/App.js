import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';


const globalProfileInfo = React.createContext(-1)
export const IP_ADRESS = React.createContext('http://127.0.0.1:8000/')

//<Route path='/courses/:id' element={<Course id=/>
function App() {
  async function getProfileId(){
    const config={
        method: 'get',
        url: IP_ADRESS
    }
    axios.get(IP_ADRESS)
    .then((response) =>{ console.log(response.status)})
  }
  getProfileId()
  return (
      <div>
      <Header/>
      <Sidebar/>
      <main id='main' class='main'>
        <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route path='/courses/' element={<Courses/>}/>
          <Route path='/login/' element={<Login/>}/>
        </Routes>
      </main>
      </div>
  );
}

export default App;

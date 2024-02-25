import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';

import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Course from './pages/Course';
import Task from './pages/Task';
import Grades from './pages/Grades';
//import CreateCourse from './pages/CreateCourse'
import AuthService from './components/auth';

//<Route path='/courses/:id' element={<Course id=/>
// async function getProfileID(){
//   let username = 'e'
//   let password = 'c'
//   const response =  await axios({
//     method: 'post',
//     url: 'http://127.0.0.1:8000/api/signin',
//     params: {"username": username, "password": password}
//   })
//   const items = response.data
//   console.log(items)
//   //axios.get(IP_ADRESS)
//   //.then((response) =>{ console.log(response.status)})
// }
// getProfileID()
//console.log(AuthService.getCurrentUser())
function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <main id='main' class='main'>
        <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route exact path='/courses/' element={<Courses/>}/>
          <Route path='/login/' element={<Login/>}/>
          <Route path='/register/' element={<Register/>}/>
          <Route path='/profile/' element={<Profile/>}/>
          <Route path='/courses/:id' element={<Course/>}/>
          <Route path='/tasks/' element={<Home/>}/>
          <Route path='/tasks/:id' element={<Task/>}/>
          {/* <Route path='/createCourse' element={<CreateCourse/>}/> */}
          <Route path='/grades/:id' element={<Grades/>}/>
        </Routes>
      </main>
      </div>
  );
}

export default App;

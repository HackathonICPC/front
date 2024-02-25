import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Course from './pages/Course';
import Task from './pages/Task';

//<Route path='/courses/:id' element={<Course id=/>
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
        </Routes>
      </main>
      </div>
  );
}

export default App;

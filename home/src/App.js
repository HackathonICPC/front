import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';


//<Route path='/courses/:id' element={<Course id=/>
function App() {
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

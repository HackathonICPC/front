import React, { useContext, useState } from 'react';
import AuthService from "../components/auth";
import { useNavigate } from "react-router-dom";

export default function Register(props){
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault()

    AuthService.register(username, name, password).then(
      () =>{
        navigate('/')
        window.location.reload();
      }
    )
  }
  return(
    <>
    <form onSubmit={handleRegister}>
    <div class="form-group">
        <label for="InputEmail">Login</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter login"
        onChange={onChangeUsername}/>
    </div>
    <div class="form-group">
        <label for="InputEmail">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter login"
        onChange={onChangeName}/>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
        onChange={onChangePassword}/>
    </div>
    <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
    </>
  )
}
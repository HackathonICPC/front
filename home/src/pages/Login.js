import React, { useContext, useState } from 'react';
import AuthService from "../components/auth";
import { useNavigate } from "react-router-dom";

export default function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) =>{
        e.preventDefault()
        
        AuthService.login(username, password).then(
            () => {
                navigate('/')
                window.location.reload();
            }
        )
    }

    return(
        <>
        <form onSubmit={handleLogin}>
        <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            onChange={onChangeUsername}/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
            onChange={onChangePassword}/>
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
        </>
    );
};
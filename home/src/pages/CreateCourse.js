import React, { useContext, useState } from 'react';
import UserService from "../components/user";
import { useNavigate } from "react-router-dom";

export default function CreateCourse(props){
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const id = UserService.getID()
    const navigate = useNavigate();
    const onChangeTitle = (e) => {
        const $title = e.target.value;
        setTitle($title);
      };
    
    const onChangeDescr = (e) => {
        const $descr = e.target.value;
        setDescr($descr);
    };

    const handleAddCourse = (e) =>{
        e.preventDefault()  
        
        UserService.createCourse(title, descr)
        navigate('/')
    }

    return(
        <>
        <form onSubmit={handleAddCourse}>
        <div class="form-group">
            <label for="InputEmail">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            onChange={onChangeTitle}/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Descr</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"
            onChange={onChangeDescr}/>
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
        </>
    );
};
import { useState, useEffect } from "react";
import Notifications from "./Notifications";
import {Link} from 'react-router-dom'
import UserService from "../user";
import AuthService from "../auth";

/*
props:
    src: path to img
    name: text
*/
export default function Profile(props){
    const id = UserService.getID()
    const imgSrc = 'assets/img/sour_soup.jpg' // TODO
    const [name, setName] = useState(null)
    useEffect(() => {
        if(id!=null)
        UserService.getName().then((response) => {setName(response.data)})
    })
    const showLogin = () =>{
        return (
            <>  
            <li class="nav-item dropdown pe-3">
                <Link className="nav-link nav-profile d-flex align-items-center pe-0" to = '/login/'>
                    <span class="d-none d-md-block  ps-2"> Login</span>
                </Link>
            </li>
            <li class="nav-item dropdown pe-3">
            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to = '/register/'>
                    <span class="d-none d-md-block  ps-2"> Register </span>
            </Link>
            </li>
            </>
        )
    }
    const showProfile = () => {
        return (
            <>
            <Notifications/>
            <li class="nav-item dropdown pe-3">
                <Link class="nav-link nav-profile d-flex align-items-center pe-0" to='profile/'>
                    <img src={'/assets/img/sour_soup.jpg'} alt="Profile" class="rounded-circle"/>
                    <span class="d-none d-md-block ps-2"> {name}</span>
                </Link>
            </li>
            </>
        )
    }   
    return (<>
        {(id==null)? showLogin(): showProfile()}
        </>
        );
}
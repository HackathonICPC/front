import { useState } from "react";
import Notifications from "./Notifications";
import {Link} from 'react-router-dom'

/*
props:
    src: path to img
    name: text
*/
export default function Profile(props){
    const [imgSrc, setImgSrc] = useState('assets/img/sour_soup.jpg')
    const [name, setName] = useState('Суп в супе')
    const [id, setId] = useState(-1)
    const showLogin = () =>{
        return (
            <>  
            <li class="nav-item dropdown pe-3">
                <Link className="nav-link nav-profile d-flex align-items-center pe-0" to = '/login/'>
                    <span class="d-none d-md-block  ps-2"> Login </span>
                </Link>
            </li>
            <li class="nav-item dropdown pe-3">
            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to = '/register'>
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
                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src={imgSrc} alt="Profile" class="rounded-circle"/>
                    <span class="d-none d-md-block dropdown-toggle ps-2"> {name}</span>
                </a>
            </li>
            </>
        )
    }
    return (<>
        {(id === -1)? showLogin(): showProfile()}
        </>
        );
}
import { useState } from "react";
import { Link } from "react-router-dom"
/*
  props:
    linkActive: true / false
    name: string
    biItem: string
*/
export default function LinkItem(props) {
  const [active, setActive] = useState(props.linkActive)
  function handleClick(){
    setActive(1)
  }
  return (
    <li class = 'nav-item'>
        <Link to='/courses/'
             onClick={handleClick}>
            <i class = {props.biitem}></i>
            <span> {props.name} </span>
        </Link>
    </li>
  )
}
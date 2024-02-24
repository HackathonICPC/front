import { useState } from "react";
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
        <a class = {`nav-item ${(active)? 'active' : ''}`} href = '#' 
        onClick={handleClick}>
            <i class = {props.biitem}></i>
            <span> {props.name} </span>
        </a>
    </li>
  )
}
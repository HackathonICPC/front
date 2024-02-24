import { useState } from "react";
import { Link } from "react-router-dom"

/*
  props:
  name: string
    collapsedItems: [{
      id: int
      name: string
    }]
    biItem: string
*/

export default function CollapsedItem(props) {
  const [open, setOpen] = useState(false)
  function handleOpen(){
    setOpen(!open)
  }
  
  const showCollapsedItem = () =>{
    return props.collapsedItems.map((x) => <li>
      <Link to={`/courses/${x.id}`}>
        <i class="bi bi-circle"></i><span>x.name</span>
      </Link>
    </li>)
  }
  return (
    <li class = 'nav-item'>
    <a class = {`nav-item ${(open) ? '' : 'collapsed'}`} data-bs-target="#components-nav" data-bs-toggle="collapse"
      aria-expanded= {(open)?'true':'false'}
          onClick= {handleOpen} href = '#'>
        <i class = {props.biitem}></i>
        <span> {props.name} </span>
        <i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="components-nav" class= {`nav-content collapse ${(open)? 'show' : ' '} `} data-bs-parent="#sidebar-nav">
            {showCollapsedItem()}
    </ul>
  </li>
  )
}
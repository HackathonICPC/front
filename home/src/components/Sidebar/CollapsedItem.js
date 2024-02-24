import { useState } from "react";

/*
  props:
  name: string
    collapsedItems: [{
      link: string
      name: string
    }]
    biItem: string
*/

export default function CollapsedItem(props) {
  const [open, setOpen] = useState(false)
  console.log(open)
  function handleOpen(){
    setOpen(!open)
  }
  const showCollapsedItem = () =>{
    return props.collapsedItems.map((x) => <li>
      <a href="x.link">
        <i class="bi bi-circle"></i><span>x.name</span>
      </a>
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
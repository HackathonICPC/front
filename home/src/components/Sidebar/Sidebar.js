import { useState } from "react";

import LinkItem from './LinkItem'
import CollapsedItem from './CollapsedItem'
export default function Sidebar(){
    return (
        <aside id = 'sidebar' class = 'sidebar'>
            <ul class = 'sidebar-nav' id = 'sidebar-nav'>
                <LinkItem linkActive = {true} 
                name = 'All courses' 
                biItem = 'bi bi-grid'
                />
                <CollapsedItem name = 'My courses'
                biItem = 'bi bi-menu-button-wide'
                collapsedItems = {[{
                    'link': '#',
                    'name': 'Капец'
                }
                ]}
                />
            </ul>
            {/* <ul class = 'sidebar-nav' id = 'sidebar-nav'>
                <NavItem linkActive = {false} 
                name = 'My courses' 
                collapsedActive = {true}
                collapsedItems = {[{
                    'link': '#',
                    'name': 'Капец'
                }
                ]}
                biItem = 'bi-grid'
                />
            </ul> */}
        </aside>
        // <aside id = 'sidebar' class = 'sidebar'>
        //     <ul class = 'sidebar-nav' id = 'sidebar-nav'>
        //         <li class = 'nav-item'>
        //             <a class = 'nav-link active' href = '#'>
        //                 <i class = 'bi-grid'></i>
        //                 <span>My courses</span>
        //             </a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        //             <i class="bi bi-menu-button-wide"></i><span>All courses</span><i class="bi bi-chevron-down ms-auto"></i>
        //             </a>    
        //         </li>   
        //     </ul>
        // </aside>
    );
}
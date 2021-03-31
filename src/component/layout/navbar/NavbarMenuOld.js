import React from 'react'
import {NavLink} from "react-router-dom";


function NavbarMenuOld ({title, color, action, link}){


    return(
        <li className="nav-item mx-3">
            <NavLink exact to={link} className={'nav-link btn ' + color} onClick={action}>{title}</NavLink>
        </li>
    )
}

export default NavbarMenuOld;
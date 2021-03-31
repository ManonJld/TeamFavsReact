import React from 'react'
import {NavLink} from "react-router-dom";
import {NavItem} from "reactstrap";


function NavbarItem ({link, action, title}){


    return(
        <NavItem>
            <NavLink exact to={link} className='btn btn-myBlue my-1 mx-2' onClick={action}>{title}</NavLink>
        </NavItem>
    )
}

export default NavbarItem;
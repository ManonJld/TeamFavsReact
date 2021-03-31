import React from 'react'
import {NavLink} from "react-router-dom";
import {NavItem} from "reactstrap";


function NavbarItem ({href, action, title}){


    return(
        <NavItem>
            <a href={href} className='btn btn-myBlue my-1 mx-2' onClick={action}>{title}</a>
        </NavItem>
    )
}

export default NavbarItem;
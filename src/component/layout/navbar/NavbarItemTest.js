import React from 'react'
import {NavItem, NavLink} from "reactstrap";


function NavbarItemTest ({href, color, action, title}){


    return(
        <NavItem>
            <NavLink href={href} className={'nav-link btn ' + color} onClick={action}>{title}</NavLink>
        </NavItem>
    )
}

export default NavbarItemTest;
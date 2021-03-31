import React, {useState} from 'react';
import logo from '../../../assets/logosmallh200.png'
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";
import NavbarItemTest from "./NavbarItemTest";
import {logout} from "../../../action/authActions";
import {connect} from "react-redux";


function NavbarTest(props)
{
    const { isAuthenticated } = props;

    const [isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const handleLogout = () =>{
        props.logout();
        props.history.push("/login");
    }

    return(
        <div>
            <Navbar className="navbar-beige" light expand="md">
                <NavbarBrand href="/"><img src={logo} alt="TeamFavs"/></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {(!isAuthenticated && (
                            <>
                                <NavbarItemTest href="/créer-un-compte" color="btn-myBlue" title="Créer un compte"/>
                                <NavbarItemTest href="/login" color="btn-myBlue" title="Se connecter"/>
                            </>
                        )) || (
                            <>
                                <NavbarItemTest href="/mon-compte" color="btn-myBlue" title="Mon compte" />
                                <NavbarItemTest action={handleLogout} color="btn-myBlue" title="Déconnexion"/>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(NavbarTest)

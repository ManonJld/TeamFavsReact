import React, {useState} from 'react';
import logo from '../../../assets/logosmallh200.png'
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import NavbarItem from "./NavbarItem";
import {logout} from "../../../action/authActions";
import {connect} from "react-redux";
import ModalNewTeam from "../../modals/ModalNewTeam";


const MyNavbar = (props) =>
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

    // cacher navbar sur la page Team
    // en local :
    // if(window.location.href.slice(22, 26) === 'team'){
    //     return null
    // }
    if(window.location.href.slice(27, 31) === 'team' || window.location.href.slice(32, 36) === 'team'){
        return null
    }

    return(
        <div>
            <Navbar className="navbar-beige" light expand="md">
                <NavbarBrand href="/"><img src={logo} alt="TeamFavs"/></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto align-bottom" navbar>
                        {(!isAuthenticated && (
                            <>
                                <NavbarItem link="/creer-un-compte" title="Créer un compte"/>
                                <NavbarItem link="/login" color="btn-myBlue" title="Se connecter"/>
                            </>
                        )) || (
                            <>
                                {/*<NavbarItem link="/mon-compte" color="btn-myBlue" title="Mon compte" />*/}
                                <NavItem>
                                    <ModalNewTeam/>
                                </NavItem>
                                <NavItem>
                                    <button className="btn btn-myBlue my-1 mx-2" onClick={handleLogout}>Déconnexion</button>
                                </NavItem>
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
    mapDispatchToProps
)(MyNavbar);

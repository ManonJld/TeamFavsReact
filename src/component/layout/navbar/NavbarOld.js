import React from 'react';
import {NavLink, Link} from "react-router-dom";
import logo from '../../../assets/logosmallh200.png'
import NavbarMenuOld from "./NavbarMenuOld";
import ModalNewTeam from "../../modals/ModalNewTeam";
import ModalComponent from "../../modals/ModalComponent";
// import authApi from "../../../services/authApi";
// import AuthContext from "../../../context/AuthContext";

function NavbarOld(props)
{
    const { isAuthenticated } = props;

    // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    //
    const handleLogout = () =>{
        props.logout();
        props.history.push("/login");
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-beige">
            <div className="container-fluid">

                <Link to='/' className='navbar-brand'>
                    <img src={logo} alt="TeamFavs"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="d-flex flex-row-reverse collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {(!isAuthenticated && (
                            <>
                                <NavbarMenuOld link="/créer-un-compte" color="btn-myBlue" title="Créer un compte"/>
                                <NavbarMenuOld link='/login' color="btn-myBlue" title="Se connecter"/>
                            </>
                        )) || (
                            <>
                                <NavbarMenuOld link="/mon-compte" color="btn-myBlue" title="Mon compte" />
                                <li className="nav-item mx-3">
                                    <button onClick={handleLogout} className='nav-link btn btn-myBlue'>Déconnexion</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarOld;

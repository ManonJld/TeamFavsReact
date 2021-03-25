import React from 'react';
import {NavLink, Link} from "react-router-dom";
import logo from '../../../assets/logosmallh200.png'
// import logo from "../../../assets/logosmallh200.png";
// import authApi from "../../../services/authApi";
// import AuthContext from "../../../context/AuthContext";

function Navbar(props)
{

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
                        {/*{(!isAuthenticated && (*/}
                        {/*    <>*/}
                                <li className="nav-item mx-3">
                                    <NavLink exact to='/creer-un-compte' className='nav-link btn btn-myBlue'>Créer un compte</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink to='/login' className='nav-link btn btn-myBlue'>Se connecter</NavLink>
                                </li>
                        {/*    </>*/}
                        {/*)) || (*/}
                        {/*    <>*/}
                                <li className="nav-item mx-3">
                                    <NavLink exact to='/mon-compte' className='nav-link btn btn-myBlue'>Mon compte</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink exact to='' className='nav-link btn btn-myBlue'>Créer une Team</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <button onClick={handleLogout} className='nav-link btn btn-myBlue'>Déconnexion</button>
                                </li>
                        {/*    </>*/}
                        {/*)}*/}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

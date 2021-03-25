import React from 'react';
import LoginContainer from "../login/LoginContainer";
import Login from "../login/Login";

// function LoginPage({history})
function LoginPage(props) {

    console.log(window.localStorage)
    return(
        <React.Fragment>
            <h1>Page de connexion</h1>
            <LoginContainer/>
        </React.Fragment>

    )
}

export default LoginPage
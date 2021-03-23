import React from 'react';
import LoginContainer from "../login/LoginContainer";

function LoginPage({history}) {

    return(
        <React.Fragment>
            <h1>Page de connexion</h1>
            <LoginContainer/>
        </React.Fragment>

    )
}

export default LoginPage
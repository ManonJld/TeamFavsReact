import React from 'react';
import LoginContainer from "../login/LoginContainer";

// function LoginPage({history})
function LoginPage({history}) {

    console.log(window.localStorage)

    return(
        <div className="container">
            <h1>Page de connexion</h1>
            <LoginContainer history={history}/>
        </div>



    )
}

export default LoginPage
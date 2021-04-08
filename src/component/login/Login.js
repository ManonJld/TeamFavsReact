import React from 'react';


function Login(props) {
    const {
        email,
        password,
        changeInputLogin,
        errorMsg,
        username,
        isAuthenticated
    } = props;

    if (isAuthenticated){
        props.history.replace("/mon-compte")
    }

    const handleSubmit = event => {
        event.preventDefault();
        try {
            props.loginRequest()
            props.history.replace("/mon-compte")
        } catch (error) {
            props.returnErrors()
            console.log(errorMsg)
        }
    }
    console.log(window.localStorage)


    return (
        <div className='container'>
            <h1 className='roboto'>Welcome!!!{email}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Adresse email</label>
                    <input
                        onChange={event =>
                            changeInputLogin(event)
                        }
                        value={username}
                        name="username"
                        id="username"
                        type="email"
                        className="form-control"
                        placeholder="Adresse email de connexion"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        value={password}
                        onChange={event => changeInputLogin(event)}
                        name="password"
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Mot de passe"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-myBlue">Connexion</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
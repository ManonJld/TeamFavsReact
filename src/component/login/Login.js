import React from 'react';


function Login(props) {
    const {
        password,
        changeInputLogin,
        username,
        isAuthenticated,
        errors
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
            console.log(error)

        }
    }


    console.log(window.localStorage)


    return (
        <div className='container'>
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
                        className={"form-control " + (errors && " is-invalid")}
                        placeholder="Adresse email de connexion"
                    />
                    {errors && <p className="invalid-feedback">La combinaison email / mot de passe est invalide</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        value={password}
                        onChange={event => changeInputLogin(event)}
                        name="password"
                        id="password"
                        type="password"
                        className={"form-control " + (errors && " is-invalid")}
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
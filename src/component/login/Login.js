import React from 'react';

function Login(props) {
    const {
        email,
        password,
        changeInputLoginPassword,
        changeInputLoginEmail,


    } = props;

    return (
        <div className='container'>
            <h1 className='roboto'>Welcome!!!</h1>
            <form onSubmit={(event) => {
                props.loginUser();
                event.preventDefault();
            }}>
                <div className="form-group">
                    <label htmlFor="username">Adresse email</label>
                    <input
                        value={email}
                        onChange={event => changeInputLoginEmail(event.target.value)}
                        name="username"
                        id="username"
                        type="email"
                        // className={"form-control" + (error && " is-invalid")}
                        className="form-control"
                        placeholder="Adresse email de connexion"
                    />
                    {/*{error && <p className="invalid-feedback">{error}</p> }*/}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        value={password}
                        onChange={event => changeInputLoginPassword(event.target.value)}
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
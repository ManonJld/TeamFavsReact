import React, {useState} from 'react';

function Login(props) {
    const {
        email,
        password,
        message,
        change,
        changeInputEmail,
        username

        // loadUser


    } = props;

    // const changeInputLoginEmail = props.changeInputLoginEmail;

    console.log(window.localStorage)

    return (
        <div className='container'>
            <h1 className='roboto'>Welcome!!!{email}</h1>
            <form
                onSubmit={(event) => {
                props.loginRequest();
                event.preventDefault();
            }}>
                <div className="form-group">
                    <label htmlFor="username">Adresse email</label>
                    <input
                        onChange={event =>
                            changeInputEmail(event.target.value)

                        }
                        value={username}
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
                        onChange={event => props.changeInputLoginPassword(event.target.value)}
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
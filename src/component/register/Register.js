import React from 'react';


function Register(props) {
    const {
        password,
        email,
        firstname,
        lastname,
        picture,
        registerRequest,
        changeInputRegister

    } = props;


    const handleSubmit = event => {
        event.preventDefault();
        try {
            registerRequest()
            props.history.replace("/mon-compte")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='container'>
            <h1 className='roboto'>Welcome!!!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Adresse email</label>
                    <input
                        onChange={event =>
                            changeInputRegister(event)
                        }
                        value={email}
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Adresse email de connexion"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        value={password}
                        onChange={event => changeInputRegister(event)}
                        name="password"
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Mot de passe"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        value={firstname}
                        onChange={event => changeInputRegister(event)}
                        name="firstName"
                        id="firstName"
                        type="text"
                        className="form-control"
                        placeholder="Prénom"
                        maxLength="40"
                        minLength="3"
                        pattern="^[A-z _-]{3,40}$"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Nom</label>
                    <input
                        value={lastname}
                        onChange={event => changeInputRegister(event)}
                        name="lastName"
                        id="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                        maxLength="40"
                        minLength="3"
                        pattern="^[A-z _-]{3,40}$"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profilPicture">Photo de profil</label>
                    <input
                        value={picture}
                        onChange={event => changeInputRegister(event)}
                        name="profilPicture"
                        id="profilPicture"
                        type="url"
                        className="form-control"
                        placeholder="Photo de profil"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-myBlue">Créer un compte</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
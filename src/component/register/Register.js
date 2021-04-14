import React from 'react';


function Register(props) {
    const {
        password,
        email,
        firstname,
        lastname,
        picture,
        registerRequest,
        changeInputRegister,
        errors

    } = props;



    const handleSubmit = event => {
        event.preventDefault();
        try {
            registerRequest()
            //todo : voir comment faire
            // props.history.replace("/mon-compte")
        } catch (error) {
            console.log(error)
            //je ne fais pas le map de mes erreurs ici car elle ne seraient pas dans le state et ne s'afficheraient pas
        }
    }

    const errorsTable = {};
    //s'il y a des erreurs, je les mets dans un nouveau tableau avec les property path pour ensuite les afficher sous les inputs
    if (errors) {
        errors.violations.map((violation) => (
            errorsTable[violation.propertyPath] = violation.message
            ))
    }


    console.log(errorsTable)

    return (
        <div className='container'>
            <h1 className='roboto'>Créer votre compte</h1>
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
                        className={"form-control " + (errorsTable.email && " is-invalid")}
                        placeholder="Adresse email de connexion"
                    />
                    {errorsTable && <p className="invalid-feedback">{errorsTable.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        value={password}
                        onChange={event => changeInputRegister(event)}
                        name="password"
                        id="password"
                        type="password"
                        className={"form-control " + (errorsTable.password && " is-invalid")}
                        placeholder="Mot de passe"
                    />
                    {errorsTable && <p className="invalid-feedback">{errorsTable.password}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        value={firstname}
                        onChange={event => changeInputRegister(event)}
                        name="firstName"
                        id="firstName"
                        type="text"
                        className={"form-control " + (errorsTable.firstName && " is-invalid")}
                        placeholder="Prénom"
                        maxLength="40"
                        minLength="3"
                        pattern="^[A-z _-]{3,40}$"
                    />
                    {errorsTable && <p className="invalid-feedback">{errorsTable.firstName}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Nom</label>
                    <input
                        value={lastname}
                        onChange={event => changeInputRegister(event)}
                        name="lastName"
                        id="lastName"
                        type="text"
                        className={"form-control " + (errorsTable.lastName ? " is-invalid" : null)}
                        placeholder="Nom"
                        maxLength="40"
                        minLength="3"
                        pattern="^[A-z _-]{3,40}$"
                    />
                    {errorsTable && <p className="invalid-feedback">{errorsTable.lastName}</p>}
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
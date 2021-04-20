import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import {postBookmark, changeInputNewBookmark} from "../../action/appActions";


function ModalNewBookmark(props){

    const {
        postBookmark,
        newBookmark,
        categories,
        changeInputNewBookmark,
        errors,
    } = props;


    const handleSubmit = event => {
        event.preventDefault();
        try {
            postBookmark()
        } catch (error) {
            console.log(error)
        }
    }

    const categoriesOption = categories.map((category) => (
        <option key={category.id} value={category['@id']}>{category.name}</option>
    ))

    let errorsTable = {};
    //s'il y a des erreurs, je les mets dans un nouveau tableau avec les property path pour ensuite les afficher sous les inputs
    if (errors) {

        if (errors.violation) {
            errors.violations.map((violation) => (
                errorsTable[violation.propertyPath] = violation.message
            ))
        } else {
            errorsTable['category'] = "Veuillez choisir une catégorie"
        }
    } else {
        errorsTable = {}
    }

    return(
        <ModalComponent
            buttonLabel="Créer un favoris"
            title="Créer un favoris"
            classname="nav-link btn-myBlue my-2"
        >



            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom du favoris</label>
                    <input
                        value={newBookmark.name}
                        onChange={event => changeInputNewBookmark(event)}
                        name="name"
                        id="name"
                        type="text"
                        className={"form-control " + (errorsTable.name && " is-invalid")}
                        placeholder="Entrez un nom"
                        maxLength="40"
                        minLength="3"
                        pattern="[\p{L}-]+{3,40}"
                    />
                    {errorsTable && <p className="invalid-feedback">{errorsTable.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url du favoris</label>
                    <input
                        value={newBookmark.url}
                        onChange={event => changeInputNewBookmark(event)}
                        name="url"
                        id="url"
                        type="text"
                        className={"form-control " + (errorsTable.url && " is-invalid")}
                        placeholder="Entrez une url"
                        pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)"
                    />
                    {errorsTable && <p className="invalid-feedback">{errorsTable.url}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="category">Sélectionner une catégorie</label>
                    <select className={"form-control " + (errorsTable.category && " is-invalid")} id="category" name="category" value={newBookmark.category} onChange={event => changeInputNewBookmark(event)}>
                        <option value="">Veuillez choisir une catégorie</option>
                        {categoriesOption}
                    </select>
                    {errorsTable.category && <p className="invalid-feedback">Veuillez renseigner une catégorie</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        value={newBookmark.image}
                        onChange={event => changeInputNewBookmark(event)}
                        name="image"
                        id="image"
                        type="text"
                        className="form-control"
                        placeholder="Entrez une url d'image"
                        pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" className="form-control" rows="3" value={newBookmark.description} onChange={event => changeInputNewBookmark(event)}>{newBookmark.description}</textarea>
                </div>
                <button className="btn btn-myBlue" type="submit"> Valider </button>
            </form>
        </ModalComponent>
    )
}

const mapStateToProps = state => ({
    newBookmark: state.appReducer.newBookmark,
    categories: state.appReducer.categories,
    errors: state.appReducer.errors.postBookmark
})

const mapDispatchToProps = dispatch => ({
    postBookmark: (newTeam) => dispatch(postBookmark(newTeam)),
    changeInputNewBookmark: (event) => (
        dispatch(changeInputNewBookmark(event))
    ),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalNewBookmark);
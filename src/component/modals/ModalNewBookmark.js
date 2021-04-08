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
                        className="form-control"
                        placeholder="Entrez un nom"
                        maxLength="40"
                        minLength="3"
                        pattern="^[A-z 0-9_-]{3,40}$"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url du favoris</label>
                    <input
                        value={newBookmark.url}
                        onChange={event => changeInputNewBookmark(event)}
                        name="url"
                        id="url"
                        type="text"
                        className="form-control"
                        placeholder="Entrez une url"
                        pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Sélectionner une catégorie</label>
                    <select className="form-control" id="category" name="category" value={newBookmark.category} onChange={event => changeInputNewBookmark(event)}>
                        <option value="">Veuillez choisir une catégorie</option>
                        {categoriesOption}
                    </select>
                </div>
                <button type="submit"> Valider </button>
            </form>
        </ModalComponent>
    )
}

const mapStateToProps = state => ({
    newBookmark: state.appReducer.newBookmark,
    categories: state.appReducer.categories
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
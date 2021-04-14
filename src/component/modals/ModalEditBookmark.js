import React, {useEffect} from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import {changeInputEditBookmark, putBookmark, setEditBookmark} from "../../action/appActions";


function ModalEditBookmark(props){

    const {
        editBookmark,
        putBookmark,
        categories,
        changeInputEditBookmark,
    } = props;

    const handleSubmit = event => {
        event.preventDefault();
        try {
            putBookmark()
        } catch (error) {
            console.log(error)
        }
    }


    //le filtre permet de ne pas montrer la catégorie du bookmark dans la liste
    const categoriesOption = categories
        .filter(category => category['@id'] !== editBookmark.category['@id'])
        .map((category) => (
        <option key={category.id} value={category['@id']}>{category.name}</option>
    ))

    console.log(editBookmark);


    return(
        <ModalComponent
            buttonLabel="Modifier"
            title="Modifier"
            classname="nav-link btn-myBlue my-2"
        >



            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom du favoris</label>
                    <input
                        value={editBookmark.name}
                        onChange={event => changeInputEditBookmark(event)}
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
                        value={editBookmark.url}
                        onChange={event => changeInputEditBookmark(event)}
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
                    <select className="form-control" id="category" name="category" value={editBookmark.category} onChange={event => changeInputEditBookmark(event)}>
                        <option value={editBookmark.category['@id']}>{editBookmark.category.name}</option>
                        {categoriesOption}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        value={editBookmark.image}
                        onChange={event => changeInputEditBookmark(event)}
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
                    <textarea id="description" name="description" className="form-control" rows="3" value={editBookmark.description} onChange={event => changeInputEditBookmark(event)}>{editBookmark.description}</textarea>
                </div>
                <button className="btn btn-myBlue" type="submit"> Valider </button>
            </form>
        </ModalComponent>
    )
}

const mapStateToProps = state => ({
    editBookmark: state.appReducer.editBookmark,
    categories: state.appReducer.categories
})

const mapDispatchToProps = dispatch => ({
    setEditBookmark: (value) =>(setEditBookmark(value)),
    changeInputEditBookmark: (event) => (
        dispatch(changeInputEditBookmark(event))
    ),
    putBookmark: () => dispatch(putBookmark())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalEditBookmark);
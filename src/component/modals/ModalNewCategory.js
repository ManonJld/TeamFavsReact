import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import {postCategory, changeInputApp} from "../../action/appActions";


function ModalNewCategory(props){

    const {
        newCategory,
        postCategory,
        changeInputApp
    } = props;

    const handleSubmit = event => {
        event.preventDefault();
        try {
            postCategory()
        } catch (error) {
            console.log(error)
        }
    }



    return(
        <ModalComponent
            buttonLabel="Créer une catégorie"
            title="Créer une catégorie">


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="newCategory">Nouvelle catégorie</label>
                    <input
                        value={newCategory}
                        onChange={event => changeInputApp(event)}

                        name="newCategory"
                        id="newCategory"
                        type="text"
                        className="form-control"
                        placeholder="Entrez un nom"
                    />
                </div>
                <button type="submit"> Valider </button>
            </form>
        </ModalComponent>
    )
}

const mapStateToProps = state => ({
    newCategory: state.appReducer.newCategory
})

const mapDispatchToProps = dispatch => ({
    postCategory: (newTeam) => dispatch(postCategory(newTeam)),
    changeInputApp: (event) => (
        dispatch(changeInputApp(event))
    ),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalNewCategory);
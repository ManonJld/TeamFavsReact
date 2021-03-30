import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import {postBookmark, changeInputApp} from "../../action/appActions";


function ModalNewCategory(props){

    const {
        newBookmark,
        postBookmark,
        changeInputApp,
        url
    } = props;

    const handleSubmit = event => {
        event.preventDefault();
        try {
            postBookmark()
        } catch (error) {
            console.log(error)
        }
    }



    return(
        <ModalComponent
            buttonLabel="Créer un favoris"
            title="Créer un favoris">


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="newBookmark">Nom du favoris</label>
                    <input
                        value={newBookmark}
                        onChange={event => changeInputApp(event)}

                        name="newBookmark"
                        id="newBookmark"
                        type="text"
                        className="form-control"
                        placeholder="Entrez un nom"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url du favoris</label>
                    <input
                        value={url}
                        onChange={event => changeInputApp(event)}

                        name="url"
                        id="url"
                        type="text"
                        className="form-control"
                        placeholder="Entrez une url"
                    />
                </div>
                <button type="submit"> Valider </button>
            </form>
        </ModalComponent>
    )
}

const mapStateToProps = state => ({
    newBookmark: state.appReducer.newBookmark,
    url: state.appReducer.url
})

const mapDispatchToProps = dispatch => ({
    postBookmark: (newTeam) => dispatch(postBookmark(newTeam)),
    changeInputApp: (event) => (
        dispatch(changeInputApp(event))
    ),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalNewCategory);
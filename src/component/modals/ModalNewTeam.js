import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import {postTeam, changeInputApp} from "../../action/appActions";


function ModalNewTeam(props){

    const {
        newTeam,
        postTeam,
        changeInputApp
    } = props;

    const handleSubmit = event => {
        event.preventDefault();
        try {
            postTeam()
        } catch (error) {
            console.log(error)
        }
    }



    return(
        <ModalComponent
            buttonLabel="Créer une team"
            title="Créer une team">


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="newTeam">Nouvelle team</label>
                    <input
                        value={newTeam}
                        onChange={event => changeInputApp(event)}

                        name="newTeam"
                        id="newTeam"
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
    newTeam: state.appReducer.newTeam
})

const mapDispatchToProps = dispatch => ({
    postTeam: (newTeam) => dispatch(postTeam(newTeam)),
    changeInputApp: (event) => (
        dispatch(changeInputApp(event))
    ),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalNewTeam);
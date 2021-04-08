import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import ModalManageMembers from "./ModalManageMembers";


function ModalManageTeam(props){

    const {
        team
    } = props;





    return(
        <ModalComponent
            buttonLabel="Gérer la team"
            title={"Gérer la team " + team.name}
            classname="btn-manageTeam"
        >
            <div>
                <ModalManageMembers/>
            </div>


        </ModalComponent>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalManageTeam);
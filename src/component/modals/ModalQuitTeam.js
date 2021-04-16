import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";


function ModalQuitTeam(props){

    const {
        team
    } = props;





    return(
        <ModalComponent
            iconAwesome={faSignOutAlt}
            classnameIcon={"quitTeam"}
            title={"Quitter la team " + team.name + " ?"}
        >


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
)(ModalQuitTeam);
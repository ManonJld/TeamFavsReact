import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";


function ModalManageMembers(props){

    const {

    } = props;




    return(
        <ModalComponent
            buttonLabel="Gérer les membres"
            title="Gérer les membres"
            classname="btn-myBlue"
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
)(ModalManageMembers);
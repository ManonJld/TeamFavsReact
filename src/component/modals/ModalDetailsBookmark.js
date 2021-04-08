import React, {useState} from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


function ModalDetailsBookmark(props){

    const {
        bookmark
    } = props;


    const footer = <a target="_blank" href={bookmark.url}>{bookmark.url}</a>


    return(
        <ModalComponent
            iconAwesome={faInfoCircle}
            classnameIcon={"detailBookmark"}
            title={bookmark.name}
            classname="nav-link btn-myBlue my-2"
            footer={footer}
        >
            <div>
                {bookmark.description}
                <p>Crée par {bookmark.user.shortName}</p>
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
)(ModalDetailsBookmark);
import React from "react";
import {connect} from "react-redux";
import ModalComponent from "./ModalComponent";
import {postBookmark, changeInputNewBookmark} from "../../action/appActions";


function ModalDetailsBookmark(props){

    const {
        bookmark
    } = props;


    const footer = <a target="_blank" href={bookmark.url}>{bookmark.url}</a>


    return(
        <ModalComponent

            title={bookmark.name}
            classname="nav-link btn-myBlue my-2"
            footer={footer}
        >
            <div>
                {bookmark.description}
            </div>


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
)(ModalDetailsBookmark);
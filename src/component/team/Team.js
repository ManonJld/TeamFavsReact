import React from 'react';
import UserContainer from "./UserContainer";
import CategoriesContainer from "./CategoriesContainer";
import BookmarksContainer from "./BookmarksContainer";
import ModalNewCategory from "../modals/ModalNewCategory";
import ModalNewBookmark from "../modals/ModalNewBookmark";
import Aside from "./Aside"

function Team(props){
    const {
        teamId
    } = props;


    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="aside">
                        <Aside/>
                    </div>
                    <div className="main">
                        <BookmarksContainer/>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
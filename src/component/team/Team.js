import React from 'react';
import UserContainer from "./UserContainer";
import CategoriesContainer from "./CategoriesContainer";
import BookmarksContainer from "./BookmarksContainer";
import ModalNewCategory from "../modals/ModalNewCategory";
import ModalNewBookmark from "../modals/ModalNewBookmark";

function Team(props){
    const {
        teamId
    } = props;


    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 aside">
                        <UserContainer/>
                        <ModalNewCategory/>
                        <ModalNewBookmark/>
                        <CategoriesContainer teamId={teamId}/>
                    </div>
                    <div className="col-10 main">
                        <BookmarksContainer/>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
import React, {useEffect} from 'react';
import CategoriesContainer from "./CategoriesContainer";
import BookmarksContainer from "./BookmarksContainer";
import ModalNewCategory from "../modals/ModalNewCategory";
import ModalNewBookmark from "../modals/ModalNewBookmark";

function Team(props){
    const {
        teamName,
        clearTeamName,
        teamId
    } = props;

    useEffect(() =>{
        return () => clearTeamName();
    })

    return (
        <React.Fragment>
            <div>
                <h1>{teamName}</h1>
                <ModalNewCategory/>
                <ModalNewBookmark/>
                <div className="row">
                    <div className="col-2">
                        <CategoriesContainer teamId={teamId}/>
                    </div>
                    <div className="col-10">
                        <BookmarksContainer/>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
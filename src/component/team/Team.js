import React, {useEffect} from 'react';
import CategoriesContainer from "./CategoriesContainer";
import BookmarksContainer from "./BookmarksContainer";

function Team(props){
    const {
        teamName,
        clearTeamName
    } = props;

    useEffect(() =>{
        return () => clearTeamName();
    })

    return (
        <React.Fragment>
            <h1>{teamName}</h1>
            <CategoriesContainer/>
            <BookmarksContainer/>
        </React.Fragment>
    )
}

export default Team
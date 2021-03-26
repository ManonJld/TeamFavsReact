import React, {useEffect} from 'react';
import CategoriesContainer from "./CategoriesContainer";
import BookmarksContainer from "./BookmarksContainer";

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
            <h1>{teamName}</h1>
            <CategoriesContainer teamId={teamId}/>
            <BookmarksContainer/>
            {/*<BookmarksContainer cateId={props.match.params.cateId}/>*/}
        </React.Fragment>
    )
}

export default Team
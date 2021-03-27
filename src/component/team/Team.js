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
            <div className="container">
                <h1>{teamName}</h1>
                <div className="row">
                    <div className="col-4">
                        <CategoriesContainer teamId={teamId}/>
                    </div>
                    <div className="col-8">
                        <BookmarksContainer/>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
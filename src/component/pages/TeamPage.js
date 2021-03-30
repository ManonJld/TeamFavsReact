import React from 'react';
import TeamContainer from "../team/TeamContainer";


const TeamPage = (props) => {

    return(
        <div>
            <TeamContainer teamId={props.match.params.teamId}/>
        </div>
    )
}
export default TeamPage;
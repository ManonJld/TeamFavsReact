import React, {useEffect} from 'react';
import TeamContainer from "../team/TeamContainer";


const TeamPage = (props) => {

    useEffect(() => {
        const { match: { params } } = props;
    })

    return(
        <div>
            <TeamContainer teamId={props.match.params.teamId}/>
        </div>
    )
}
export default TeamPage;
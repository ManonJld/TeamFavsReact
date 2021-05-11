import React, {useEffect} from 'react';
import TeamContainer from "../team/TeamContainer";


const TeamPage = (props) => {

    useEffect(() => {
        const { match: { params } } = props;
    })

    return(
        <div>
            <TeamContainer teamIdUrl={props.match.params.teamIdUrl}/>
        </div>
    )
}
export default TeamPage;
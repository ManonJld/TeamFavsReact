import React from 'react';
import {Link} from "react-router-dom";

function User(props){
    const {
        firstname,
        lastname,
        // teams,
        // teamId,
        // changeInputApp
    } = props;

    // const teamsOptions = teams.map((team) =>(
    //     <option key={team.id} value={team.id}>{team.name}</option>
    //     ))
    //
    // console.log(teamId)
    return (
        <>
            {/*<div className="form-group">*/}
            {/*    <select className="form-control" id="teamId" name="teamId" value={teamId} onChange={event=>changeInputApp(event)}>*/}
            {/*        {teamsOptions}*/}
            {/*    </select>*/}
            {/*</div>*/}
            <img className="userPicture" src="https://o-ceane.ch/wp-content/uploads/2016/07/profile-icon-png-912-500x500.png" alt="profile pic" width="200px"/>
            <Link to="/mon-compte" ><p className="userName">{firstname + " " + lastname}</p></Link>


        </>
    )
}

export default User;
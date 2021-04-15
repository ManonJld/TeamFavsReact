import React, {useState} from 'react';
import {Link} from "react-router-dom";

function User(props){
    const {
        firstname,
        lastname,
        picture,
        teams,
        teamName,
        teamId,
        changeInputApp,
        currentTeamId,
        setCurrentTeamId
    } = props;


    const teamsOption = teams
        .filter(team => team.name !== teamName)
        .map((team) => (<option key={team.id} value={team.id}>{team.name}</option>))

    if (teams.length > 0) {
        setCurrentTeamId(teams.filter(team => team.name === teamName)[0].id)
    }


    return (
        <>
            <img className="userPicture" src={picture} alt="profile pic" width="200px"/>
            <Link to="/mon-compte" ><p className="userName">{firstname + " " + lastname}</p></Link>
            <div className="form-group dropdownTeams">
                <select className="form-control" id="teamId" name="teamId" value={teamId} onChange={event => changeInputApp(event)}>
                    <option value={currentTeamId}>{teamName}</option>
                    {teamsOption}
                </select>
            </div>
        </>
    )
}

export default User;
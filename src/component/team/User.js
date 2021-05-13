import React from 'react';
import {Link, useHistory} from "react-router-dom";
import image from "../../assets/undraw_female_avatar_w3jk.png";

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
        setCurrentTeamId,
        clearBookmarks,
        clearCategoryClicked
    } = props;

    let history = useHistory();

    const teamsOption = teams
        .filter(team => team.name !== teamName)
        .map((team) => (<option key={team.id} value={team.id}>{team.name}</option>))

    if (teams.length > 0) {
        setCurrentTeamId(teams.filter(team => team.name === teamName)[0].id)
    }


    return (
        <>
            {picture ? (<img src={picture} className="userPicture" alt="photo de profil" width="200px"/>) : (<img src={image} className="userPicture" alt="pas encore de photo de profil" width="200px"/>)}
            <Link to="/mon-compte" ><p className="userName">{firstname + " " + lastname}</p></Link>
            <div className="form-group dropdownTeams">
                <select className="form-control" id="teamId" name="teamId" value={teamId} onChange={event => {
                    changeInputApp(event);
                    clearBookmarks();
                    clearCategoryClicked();
                    //Pour envoyer vers la bonne url avec l'id de la team choisie
                    history.push("/team/" + event.target.value);
                }}>
                    <option value={currentTeamId}>{teamName}</option>
                    {teamsOption}
                </select>
            </div>
        </>
    )
}

export default User;
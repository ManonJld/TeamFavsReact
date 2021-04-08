import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";
import Loader from "../../_helpers/Loader";

function MyAccount(props) {

    const {
        token,
        isLoadingTeams,
        teams,
        getTeams,
        setTeamName,
        teamId,
        setTeamId,
        firstname,
        lastname,
        picture,
        userId
    } = props;



    useEffect( () =>{
        if(token !== null){
            getTeams()
        }

    }, [token, getTeams])


    if(isLoadingTeams){
        return <Loader/>
    }

    const handleEvent = (id, name) => {
        setTeamId(id);
        setTeamName(name);
        console.log(teamId)
    }

    const listTeamsCreatedByCurrentUser = teams.filter(team => team.user["@id"] === "/api/users/"+userId)
    const listTeamsNotCreatedByCurrentUser = teams.filter(team => team.user["@id"] !== "/api/users/"+userId)

    console.log(listTeamsCreatedByCurrentUser)
    console.log(listTeamsNotCreatedByCurrentUser)

    return(
        <React.Fragment>
            <div className="container contentAccount">
                <div className="row">
                    <div className="user">
                        <img src={picture} alt="profile pic" width="100%"/>
                        {token==="" ? null : (
                            <h1>{firstname} {lastname}</h1>
                        )
                        }
                    </div>
                    <div className="teamList">
                        <h2>Mes Teams as admin</h2>
                        <ul>
                            {listTeamsCreatedByCurrentUser.length > 0 ? (
                                listTeamsCreatedByCurrentUser.map((team, key )=> (
                                    <li key={key} onClick={() => handleEvent(team.id, team.name)}><Link to={"/team/" + team.id} className="teamBtn">{team.name}</Link></li>
                                ))
                            ) : null
                            }
                        </ul>
                        <h2>Mes Teams as user</h2>
                        <ul>
                            {listTeamsNotCreatedByCurrentUser.length > 0 ? (
                                listTeamsNotCreatedByCurrentUser.map((team, key )=> (
                                    <li key={key} onClick={() => handleEvent(team.id, team.name)}><Link to={"/team/" + team.id} className="teamBtn">{team.name}</Link></li>
                                ))
                            ) : null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default MyAccount;
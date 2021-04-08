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
        picture
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
                        <h2>Mes Teams</h2>
                        <ul>
                            {teams.length > 0 ? (
                                teams.map((team, key )=> (
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
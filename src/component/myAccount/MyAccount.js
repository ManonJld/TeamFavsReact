import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";
import ModalNewTeam from "../modals/ModalNewTeam";

function MyAccount(props) {

    const {
        token,
        isLoadingTeams,
        teams,
        getTeams,
        clearTeams,
        setTeamName,
        teamId,
        setTeamId
    } = props;

    let [tokenData, setTokenData] = useState("");


    useEffect( () =>{
        if(token !== null){
            setTokenData(jwtDecode(token));
            getTeams()
        }
        // return () => clearTeams()

    }, [token, getTeams, clearTeams])


    if(isLoadingTeams){
        return <div>Chargement en cours</div>
    }

    const handleEvent = (id, name) => {
        setTeamId(id);
        setTeamName(name);
        console.log(teamId)
    }

    return(
        <React.Fragment>
            <div className="container">

                {tokenData==="" ? null : (
                    <h1>Bienvenue {tokenData.firstname} {tokenData.lastname}</h1>
                )
                }
                <ModalNewTeam/>
                <ul>
                    {teams.length > 0 ? (
                        teams.map((team, key )=> (

                            <li key={key} onClick={() => handleEvent(team.id, team.name)}>{team.name} <Link to={"/team/" + team.id}> Voir, id: {team.id}</Link></li>

                        ))
                    ) : null
                    }
                </ul>

            </div>
        </React.Fragment>
    )

}

export default MyAccount;
import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";
import {setTeamName} from "../../action/appActions";

function MyAccount(props) {

    const {
        token,
        isLoadingTeams,
        teams,
        getTeams,
        clearTeams,
        getCategories,
        setTeamName
    } = props;

    let [tokenData, setTokenData] = useState("");


    useEffect( () =>{
        if(token !== null){
            setTokenData(jwtDecode(token));
            getTeams()
        }
        return () => clearTeams()

    }, [token, getTeams, clearTeams])


    if(isLoadingTeams){
        return <div>Chargement en cours</div>
    }

    const handleEvent = (id, name) => {
        getCategories(id);
        setTeamName(name)
    }

    return(
        <React.Fragment>
            <div className="container">

                {tokenData==="" ? null : (
                    <h1>Bienvenue {tokenData.firstname} {tokenData.lastname}</h1>
                )
                }

                <ul>
                    {teams.length > 0 ? (
                        teams.map((team, key )=> (

                            <li key={key}>{team.name} <Link to={"/team/" + team.name} onClick={() => handleEvent(team.id, team.name)}> Voir, id: {team.id}</Link></li>

                        ))
                    ) : null
                    }
                </ul>

            </div>
        </React.Fragment>
    )

}

export default MyAccount;
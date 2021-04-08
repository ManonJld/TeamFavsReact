import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";
import ModalNewTeam from "../modals/ModalNewTeam";
import Loader from "../../_helpers/Loader";

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
                        <img src="https://o-ceane.ch/wp-content/uploads/2016/07/profile-icon-png-912-500x500.png" alt="profile pic" width="100%"/>
                        {tokenData==="" ? null : (
                            <h1>{tokenData.firstname} {tokenData.lastname}</h1>
                        )
                        }
                    </div>
                    <div className="teamList">
                        <h2>Mes Teams</h2>
                        <ul>
                            {teams.length > 0 ? (
                                teams.map((team, key )=> (

                                    <li className="teamBtn" key={key} onClick={() => handleEvent(team.id, team.name)}><Link to={"/team/" + team.id}>{team.name}</Link></li>

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
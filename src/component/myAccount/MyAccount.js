import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Loader from "../../_helpers/Loader";
import ModalNewTeam from "../modals/ModalNewTeam";
import ModalManageTeam from "../modals/ModalManageTeam";
import ModalQuitTeam from "../modals/ModalQuitTeam";
import image from '../../assets/undraw_female_avatar_w3jk.png';

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
        // setTeamId(id);
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
                        {picture ? (<img src={picture} alt="photo de profil" width="100%"/>) : (<img src={image} alt="pas encore de photo de profil" width="100%"/>)}
                        {token==="" ? null : (
                            <h1>{firstname} {lastname}</h1>
                        )
                        }
                    </div>
                    <div className="teamList">
                        <h2>Administration des Teams</h2>
                        <ul>
                            {listTeamsCreatedByCurrentUser.length > 0 ? (
                                listTeamsCreatedByCurrentUser.map((team, key )=> (
                                    <li className="manageTeam" key={key} onClick={() => handleEvent(team.id, team.name)}><Link to={"/team/" + team.id}>{team.name}</Link><ModalManageTeam team={team}/></li>
                                ))
                            ) : (<ModalNewTeam/>)
                            }
                        </ul>
                        <h2>Mes autres Teams</h2>
                        <ul>
                            {listTeamsNotCreatedByCurrentUser.length > 0 ? (
                                listTeamsNotCreatedByCurrentUser.map((team, key )=> (
                                    <li className="manageTeam" key={key} onClick={() => handleEvent(team.id, team.name)}><Link to={"/team/" + team.id}>{team.name}</Link><ModalQuitTeam team={team}/></li>
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
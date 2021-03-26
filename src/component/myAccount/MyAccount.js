import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";

function MyAccount(props) {

    const {
        token,
        isLoading,
        teams,
        getTeams,
        clearTeams
    } = props;

    let [tokenData, setTokenData] = useState("");


    useEffect( () =>{
        if(token !== null){
            setTokenData(jwtDecode(token));
            getTeams()
        }
        return () => clearTeams()

    }, [token, getTeams, clearTeams])


    if(isLoading){
        return <div>Chargement en cours</div>
    }

    return(
        <React.Fragment>
            <div className="container">

                {tokenData==="" ? (
                    <h1>Loading</h1>
                ) : (
                    <h1>Bienvenue {tokenData.firstname} {tokenData.lastname}</h1>
                )
                }

                <ul>
                    {teams.length > 0 ? (
                        teams.map((team, key )=> (

                            <li key={key}>{team.name} Voir, id: {team.id}</li>

                        ))
                    ) : null
                    }
                </ul>

            </div>
        </React.Fragment>
    )

}

export default MyAccount;
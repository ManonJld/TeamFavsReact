import React, {useEffect} from 'react';
import BookmarksContainer from "./BookmarksContainer";
import Aside from "./Aside"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {Route} from "react-router-dom";
import NotFound from "../pages/NotFound";

function Team(props){
    const {
        teamIdUrl,
        clearCategoryClicked,
        teamName,
        categoryName,
        clearCategoryName,
        getTeams,
        teams,
        setTeamId,
        setTeamName
    } = props;

    useEffect(() => {
        setTeamId(parseInt(teamIdUrl, 10));
        getTeams();
        return () => {
            clearCategoryClicked()
            clearCategoryName()
        };
    }, [clearCategoryClicked, clearCategoryName, getTeams, teamIdUrl, setTeamId])


    //vérifie si l'id de la team passé en paramètre de l'url est bien existante pour l'utilisateur en cours, sinon redirection vers page 404
    //si id existant, setTeamName pour afficher le breadcrumb qui va bien
    if (teams.length>0) {
        const isFound = (element) => {
            return (element.id == teamIdUrl)
        }
        let testId = teams.some(isFound)
        console.log(testId);
        if(testId) {
            setTeamName(teams.filter(team => team.id == teamIdUrl)[0].name)
        } else {
            return(<Route component={NotFound}/>)
        }

    }


    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="aside">
                        {/*<Aside teamId={teamId}/>*/}
                        <Aside/>
                    </div>
                    <div className="main">
                        <div className="navTopTeam">
                            <div className="myBreadcrumb">
                                {teamName} {categoryName? " / "+categoryName : null}
                            </div>
                            <div className="searchbar">
                                <input type="text" className="form-control textForm"/>
                                <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                            </div>
                        </div>
                        <div className="filters">
                            <div>Trier par </div>
                            <div className="btn btn-myBlue mx-2">Date <FontAwesomeIcon icon={faArrowUp}/></div>
                            <div className="btn btn-myBlue mx-2">Nom <FontAwesomeIcon icon={faArrowUp}/></div>

                        </div>
                        <div className="bookmarkCardContainer">
                            <BookmarksContainer/>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
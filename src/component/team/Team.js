import React, {useEffect} from 'react';
import BookmarksContainer from "./BookmarksContainer";
import Aside from "./Aside"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Team(props){
    const {
        teamId,
        clearCategoryClicked,
        teamName,
        categoryName,
        clearCategoryName

    } = props;

    useEffect(() =>{

        return () => {
            clearCategoryClicked()
            clearCategoryName()
        };
    }, [clearCategoryClicked, clearCategoryName])



    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="aside">
                        <Aside teamId={teamId}/>
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
                            <span>Dates desc</span>
                        </div>
                        <BookmarksContainer/>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
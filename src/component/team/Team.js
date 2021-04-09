import React, {useEffect} from 'react';
import BookmarksContainer from "./BookmarksContainer";
import Aside from "./Aside"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

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
                            <div>Trier par : </div>
                            <div className="btn btn-myBlue mx-2">Date <FontAwesomeIcon icon={faArrowUp}/></div>
                            <div className="btn btn-myBlue mx-2">Date <FontAwesomeIcon icon={faArrowDown}/></div>
                            <div className="btn btn-myBlue mx-2">Alphabétique <FontAwesomeIcon icon={faArrowUp}/></div>
                            <div className="btn btn-myBlue mx-2">Alphabétique <FontAwesomeIcon icon={faArrowDown}/></div>

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
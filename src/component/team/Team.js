import React, {useEffect} from 'react';
import BookmarksContainer from "./BookmarksContainer";
import Aside from "./Aside"


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
                            {/*<nav aria-label="breadcrumb">*/}
                            {/*    <ol className="breadcrumb">*/}
                            {/*        <li className="breadcrumb-item"><a href="#">{teamName}</a></li>*/}
                            {/*        {categoryName? <li className="breadcrumb-item active" aria-current="page">{categoryName}</li> : null}*/}

                            {/*    </ol>*/}
                            {/*</nav>*/}
                            {teamName} {categoryName? " / "+categoryName : null}
                        </div>
                        <BookmarksContainer/>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
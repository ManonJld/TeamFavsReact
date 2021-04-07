import React, {useEffect} from 'react';
import BookmarksContainer from "./BookmarksContainer";
import Aside from "./Aside"


function Team(props){
    const {
        teamId,
        clearCategoryClicked,

    } = props;

    useEffect(() =>{

        return () => {
            clearCategoryClicked()
        };
    }, [clearCategoryClicked])


    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="aside">
                        <Aside teamId={teamId}/>
                    </div>
                    <div className="main">
                        <BookmarksContainer/>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default Team
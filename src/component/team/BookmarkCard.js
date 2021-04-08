import React from 'react';
import ModalDetailsBookmark from "../modals/ModalDetailsBookmark";
// import moment from 'moment';
// import momentFR from 'moment/src/locale/fr'


function BookmarkCard(props){
    const {bookmark} = props;

    //défini que le format des dates est en français
    // moment.locale('fr',momentFR );
    return (

        <div className="card bookmark">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="row card-title">
                    <div className="col-10">
                        <h5 className="card-title bookmarkTitle"><a target="_blank" href={bookmark.url}>{bookmark.name}</a></h5>
                    </div>
                    <div className="col-2">
                        <ModalDetailsBookmark bookmark={bookmark}/>
                    </div>
                </div>

                <div className="card-text">
                    <cite className="cite">crée le {new Date (bookmark.createdAt).toLocaleTimeString()}</cite><br/>
                    {/*<cite className="cite">crée le {moment(bookmark.createdAt).format('LL')}</cite><br/>*/}
                    <a target="_blank" href={bookmark.url}>Aller sur le site</a>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard;
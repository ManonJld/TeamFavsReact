import React from 'react';
import ModalDetailsBookmark from "../modals/ModalDetailsBookmark";


function BookmarkCard(props){
    const {bookmark} = props;

    return (

        <div className="card bookmark">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title"><a target="_blank" href={bookmark.url}>{bookmark.name}</a></h6>
                <div className="card-text">
                    <cite>crée par {bookmark.user.shortName} le {new Date(bookmark.createdAt).toLocaleDateString()}</cite>
                    <ModalDetailsBookmark bookmark={bookmark}/>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard;
import React from 'react';
import ModalDetailsBookmark from "../modals/ModalDetailsBookmark";


function BookmarkCard(props){
    const {bookmark} = props;

    return (

        <div className="card bookmark">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="row card-title">
                    <div className="col-10">
                        <h5 className="card-title"><a target="_blank" href={bookmark.url}>{bookmark.name}</a></h5>
                    </div>
                    <div className="col-2">
                        <ModalDetailsBookmark bookmark={bookmark}/>
                    </div>
                </div>

                <div className="card-text">
                    <cite className="cite">crée le {new Date(bookmark.createdAt).toLocaleDateString()}</cite>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard;
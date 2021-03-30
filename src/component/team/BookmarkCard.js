import React from 'react';

function BookmarkCard(props){
    const {bookmark} = props;
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h2>{bookmark.name}</h2>
            </div>
            <div className="card-body">

                <p>Bookmark crée par  le {new Date(bookmark.createdAt).toLocaleDateString()}</p>
                <p>Montant : {bookmark.description} €</p>
                <p>{bookmark.url}</p>
            </div>
        </div>
    )
}

export default BookmarkCard;
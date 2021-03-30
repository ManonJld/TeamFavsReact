import React from 'react';

function BookmarkCard(props){
    const {bookmark} = props;

    const width = 18;
    return (

        <div className="card m-1 bookmark">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{bookmark.name}</h5>
                <div className="card-text">
                    <p>Bookmark crée par {bookmark.user.shortName} le {new Date(bookmark.createdAt).toLocaleDateString()}</p>
                    <p>{bookmark.url}</p>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard;
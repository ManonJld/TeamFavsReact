import React, {useEffect} from 'react';
import ModalNewBookmark from "../modals/ModalNewBookmark";
import BookmarkCard from "./BookmarkCard";

function Bookmarks(props){
    const {
        isLoadingBookmark,
        bookmarks,
        clearBookmarks,
    } = props;



    useEffect(() =>{
        return () => clearBookmarks();
    }, [clearBookmarks])

    if(isLoadingBookmark){
        return <div>Chargement en cours</div>
    }

    return (
        <React.Fragment>
            <ModalNewBookmark/>
            {bookmarks.length > 0 ? (
                bookmarks.map((bookmark)=> (

                    <BookmarkCard key={bookmark.id} bookmark={bookmark}/>

                ))
            ) : null
            }

        </React.Fragment>
    )
}

export default Bookmarks
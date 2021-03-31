import React, {useEffect} from 'react';
import BookmarkCard from "./BookmarkCard";
import Loader from "../../_helpers/Loader";

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
        return <Loader/>
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-around flex-wrap flex-start">
                {bookmarks.length > 0 ? (
                    bookmarks.map((bookmark)=> (

                        <BookmarkCard key={bookmark.id} bookmark={bookmark}/>

                    ))
                ) : null
                }
            </div>
        </React.Fragment>
    )
}

export default Bookmarks
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
        <>

                {bookmarks.length > 0 ? (
                    bookmarks.map((bookmark)=> (

                        <BookmarkCard key={bookmark.id} bookmark={bookmark}/>

                    ))
                ) : null
                }
                {/*<p>bookmarks</p>*/}

        </>
    )
}

export default Bookmarks
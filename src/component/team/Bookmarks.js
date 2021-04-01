import React, {useEffect} from 'react';
import BookmarkCard from "./BookmarkCard";
import Loader from "../../_helpers/Loader";

function Bookmarks(props){
    const {
        isLoadingBookmark,
        bookmarks,
        clearBookmarks,
        getBookmarks,
        categoryId
    } = props;


    useEffect(() =>{
        getBookmarks(categoryId);

        return () => clearBookmarks();
    }, [clearBookmarks, getBookmarks, categoryId])

    if(isLoadingBookmark){
        return <Loader/>
    }

    const compare = (a, b) => {
        const bookA = a.bookmark.name;
        const bookB = b.bookmark.name;
        let comparison = 0;
        if (bookA > bookB) {
            comparison = 1;
        } else if (bookA < bookB) {
            comparison = -1;
        }
        return comparison;
    }

    const sortedBookmark = [].concat(bookmarks)
        .sort((a, b) => a.name > b.name ? 1 : -1)


    console.log(sortedBookmark)

    return (
        <>
            {sortedBookmark.length > 0 ? (
                sortedBookmark.map((bookmark)=> (

                    <BookmarkCard key={bookmark.id} bookmark={bookmark}/>

                ))
            ) : null
            }
        </>
    )
}

export default Bookmarks
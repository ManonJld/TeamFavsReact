import React, {useEffect, useState} from 'react';
import BookmarkCard from "./BookmarkCard";
import Loader from "../../_helpers/Loader";

function Bookmarks(props){
    const {
        isLoadingBookmark,
        bookmarks,
        clearBookmarks,
        getBookmarks,
        categoryId,
        clearCategoryId
    } = props;



    useEffect(() =>{
        if(categoryId){
            getBookmarks(categoryId);
        } else {
            console.log("no cate")
        }


        return () => {
            clearBookmarks()
            clearCategoryId()
        };
    }, [clearBookmarks, getBookmarks, categoryId, clearCategoryId])

    if(isLoadingBookmark){
        return <Loader/>
    }

    console.log(bookmarks)
    //trie les bookmarks par ordre alphabétique de nom,
    // utile lors de la création d'un nouveau bookmark,
    // sinon il va à la fin de la liste et n'est pas trié correctement
    if (bookmarks.length > 0 ) {
        let sortedBookmarks = ([].concat(bookmarks)
            .sort((a, b) => a.name > b.name ? 1 : -1))
        return (
            sortedBookmarks.map((bookmark)=> (
                <BookmarkCard key={bookmark.id} bookmark={bookmark}/>
            ))
        )
    }


    return (
        <>
        </>
    )
}

export default Bookmarks
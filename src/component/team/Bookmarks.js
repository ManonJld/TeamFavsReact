import React, {useEffect} from 'react';
import ModalNewBookmark from "../modals/ModalNewBookmark";

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
            <ul>
                {bookmarks.length > 0 ? (
                    bookmarks.map((bookmark, key)=> (

                        <li key={key}>{bookmark.name}</li>

                    ))
                ) : null
                }
            </ul>
        </React.Fragment>
    )
}

export default Bookmarks
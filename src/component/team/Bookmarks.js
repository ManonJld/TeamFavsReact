import React, {useEffect} from 'react';
import BookmarkCard from "./BookmarkCard";
import Loader from "../../_helpers/Loader";
import ModalNewBookmark from "../modals/ModalNewBookmark";
import ModalNewCategory from "../modals/ModalNewCategory";

function Bookmarks(props){
    const {
        isLoadingBookmark,
        bookmarks,
        clearBookmarks,
        getBookmarks,
        categoryId,
        clearCategoryId,
        categories,
        categoryClicked
    } = props;



    useEffect(() =>{
        if(categoryId){
            getBookmarks(categoryId);
        } else {
            console.log("no cate")
        }

        //nettoyage de la categoryId pour arriver sur une page blanche sinon le
        //getBookmarks se fait directement
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
    //obligé de le mettre dans un if, sinon la variable sortedBookmark ne se vide pas
    //et garde en mémoire les bookmark de l'ancienne catégorie visitée
    if (categories.length > 0 && categoryClicked){
        if (bookmarks.length > 0 ) {
            let sortedBookmarks = ([].concat(bookmarks)
                .sort((a, b) => a.name > b.name ? 1 : -1))
            return (
                sortedBookmarks.map((bookmark)=> (
                    <BookmarkCard key={bookmark.id} bookmark={bookmark}/>
                ))
            )
        } else {
            return(
                <div className="d-flex flex-column align-items-center">
                    <p>Aucun favoris dans cette catégorie pour le moment</p>
                    <ModalNewBookmark/>
                </div>
            )

            // let lastBookmarks = ([].concat())
            //    todo: faire un get team(id), stocker le contenu de cette requette dans teamContent et ensuite faire le sort, slice et map, s'aider de ça https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them
        }
    } else if (categories.length <= 0){
        return(
            <div className="d-flex flex-column align-items-center">
                <p>Aucune catégorie dans cette team pour le moment</p>
                <ModalNewCategory/>
            </div>
        )
    }



    return (
        <div className="container-fluid">
        </div>
    )
}

export default Bookmarks
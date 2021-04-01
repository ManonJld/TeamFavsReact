import React, {useEffect} from 'react';
import Loader from "../../_helpers/Loader";


function Categories(props){
    const {
        categories,
        isLoadingCate,
        getCategories,
        teamId,
        setCategoryId,
        getBookmarks
    } = props;


    useEffect( () => {
        getCategories(teamId)
        // return () => clearCategories();
    }, [getCategories, teamId])

    if(isLoadingCate){
        return <Loader/>
    }

    const handleEvent = (id) => {
        // getBookmarks(id)
        setCategoryId(id)
    }




    return (
            <div  className="categories">
                <ul className="text-center">
                    <li className="linkCate">Derniers ajouts </li>
                    {categories.length > 0 ? (
                        categories.map((cate, key )=> (

                            <li key={key} onClick={() => {handleEvent(cate.id)}} className="linkCate">{cate.name}</li>

                        ))
                    ) : null
                    }
                </ul>
            </div>
    )
}

export default Categories;
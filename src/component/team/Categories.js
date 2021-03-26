import React, {useEffect} from 'react';

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
        return <div>Chargement en cours</div>
    }

    const handleEvent = (id) => {
        getBookmarks(id)
        setCategoryId(id)
    }




    return (
        <React.Fragment>
            <ul>
                {categories.length > 0 ? (
                    categories.map((cate, key )=> (

                        <li key={key} onClick={() => {handleEvent(cate.id)}}>{cate.name}</li>

                    ))
                ) : null
                }
            </ul>
        </React.Fragment>
    )
}

export default Categories;
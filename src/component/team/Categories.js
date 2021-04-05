import React, {useEffect} from 'react';
import Loader from "../../_helpers/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons'

function Categories(props){
    const {
        categories,
        isLoadingCate,
        getCategories,
        teamId,
        setCategoryId,
    } = props;


    useEffect( () => {
        getCategories(teamId)
        // return () => clearCategories();
    }, [getCategories, teamId])

    if(isLoadingCate){
        return <Loader/>
    }

    const handleEvent = (id) => {
        setCategoryId(id)
    }

    const handleClick = () => {

    }

    const clock = <FontAwesomeIcon icon={faClock}/>



    return (
            <div className="categories">
                <ul className="text-center">
                    <li className="linkCate" onClick={handleClick}>Derniers ajouts {clock}</li>
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
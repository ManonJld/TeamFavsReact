import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function Categories(props){
    const {
        categories,
        isLoadingCate
    } = props;

    console.log(categories)


    if(isLoadingCate){
        return <div>Chargement en cours</div>
    }


    return (
        <React.Fragment>
            <ul>
                {categories.length > 0 ? (
                    categories.map((cate, key )=> (

                        <li key={key}>{cate.name} </li>

                    ))
                ) : null
                }
            </ul>
        </React.Fragment>
    )
}

export default Categories
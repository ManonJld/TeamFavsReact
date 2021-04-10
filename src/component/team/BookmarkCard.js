import React from 'react';
import ModalDetailsBookmark from "../modals/ModalDetailsBookmark";
import image from '../../assets/undraw_Images_re_0kll.png'
const moment = require('moment');
require('moment/locale/fr');

moment.locale('fr');

function BookmarkCard(props){
    const {bookmark} = props;



    return (

        <div className="card bookmark">
            {bookmark.image ? (<img src={bookmark.image} className="img-bkm-card" alt={bookmark.name}/>) : (<img src={image} className="img-bkm-card" alt={bookmark.name}/>)}
            <div className="card-body">
                <div className="row card-title">
                    <div className="col-10">
                        <h5 className="card-title bookmarkTitle"><a target="_blank" href={bookmark.url}>{bookmark.name}</a></h5>
                    </div>
                    <div className="col-2">
                        <ModalDetailsBookmark bookmark={bookmark}/>
                    </div>
                </div>

                <div className="card-text">
                    <cite className="cite">crée le {moment(bookmark.createdAt).format('LL')}</cite><br/>
                    <a target="_blank" href={bookmark.url}>Aller sur le site</a>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard;
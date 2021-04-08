import React from 'react';
import {Link} from "react-router-dom";

function User(props){
    const {
        firstname,
        lastname,
        picture
    } = props;


    return (
        <>
            <img className="userPicture" src={picture} alt="profile pic" width="200px"/>
            <Link to="/mon-compte" ><p className="userName">{firstname + " " + lastname}</p></Link>
        </>
    )
}

export default User;
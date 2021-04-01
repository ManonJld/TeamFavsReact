import React from 'react';
import {Link} from "react-router-dom";

function User(props){
    const {
        firstname,
        lastname,
    } = props;


    return (
        <>
            <Link to="/mon-compte" ><img src="https://o-ceane.ch/wp-content/uploads/2016/07/profile-icon-png-912-500x500.png" alt="profile pic" width="200px"/></Link>
            <p>{firstname + " " + lastname}</p>
        </>
    )
}

export default User;
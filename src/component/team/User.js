import React, {useEffect} from 'react';

function User(props){
    const {
        firstname,
        lastname,
        picture
    } = props;


    return (
        <>
            <img src="https://o-ceane.ch/wp-content/uploads/2016/07/profile-icon-png-912-500x500.png" alt="profile pic" width="200px"/>
            <p>{firstname + " " + lastname}</p>
        </>
    )
}

export default User;
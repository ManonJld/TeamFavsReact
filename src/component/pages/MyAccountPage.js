import React from 'react';
import MyAccountContainer from "../myAccount/MyAccountContainer";


function MyAccountPage(props) {

    return(
        <div className="container">
            <h1>Mon Compte</h1>
            <MyAccountContainer/>
        </div>

    )
}

export default MyAccountPage
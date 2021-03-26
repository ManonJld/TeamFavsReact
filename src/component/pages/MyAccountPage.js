import React from 'react';
import MyAccountContainer from "../myAccount/MyAccountContainer";


function MyAccountPage(props) {

    return(
        <React.Fragment>
            <h1>Mon Compte</h1>
            <MyAccountContainer/>
        </React.Fragment>

    )
}

export default MyAccountPage
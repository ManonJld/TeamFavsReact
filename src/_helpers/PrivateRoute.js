import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";


//création d'un composant de route privé, je ne peux pas aller sur une PrivateRoute si je ne suis pas authentifiée
const PrivateRoute = ( props) => {
    const {
        isAuthenticated
    } = props

    console.log("private route"+ isAuthenticated);
    return isAuthenticated ? <Route path={props.path} component={props.component}/> : <Redirect to="/login"/>
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(
    mapStateToProps,
    null
)(PrivateRoute);
import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {setup} from "../action/authActions";


//création d'un composant de route privé, je ne peux pas aller sur une PrivateRoute si je ne suis pas authentifié
const PrivateRoute = ( props) => {
    const {
        isAuthenticated
    } = props

    console.log("private route"+ isAuthenticated);
    return setup() ? <Route path={props.path} component={props.component}/> : <Redirect to="/login"/>
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    setup: () => dispatch(setup())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateRoute);
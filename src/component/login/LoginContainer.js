import {connect} from 'react-redux'
import Login from './Login';
import{
    // loadUser,
    changeInputLoginEmail,
    changeInputLoginPassword,
    loginRequest
} from "../../action/authActions";

//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.errorReducer.error,
    username: state.authReducer.loginInfo.username,
    password: state.authReducer.loginInfo.password
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    // loadUser: () => dispatch(loadUser()),
    loginRequest: () => dispatch(loginRequest()),
    changeInputLoginPassword: password => (
        dispatch(changeInputLoginPassword(password))
    ),
    changeInputEmail: username => {
        dispatch(changeInputLoginEmail(username))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
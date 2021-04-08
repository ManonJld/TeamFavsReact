import {connect} from 'react-redux'
import Login from './Login';
import{
    changeInputLogin,
    loginRequest,
} from "../../action/authActions";
import{
    returnErrors
} from "../../action/errorActions";

//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    // error: state.errorReducer.error,
    username: state.authReducer.loginInfo.username,
    password: state.authReducer.loginInfo.password,
    errorMsg: state.errorReducer.message
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    loginRequest: () => dispatch(loginRequest()),
    changeInputLogin: (event) => (
        dispatch(changeInputLogin(event))
    ),
    returnErrors: () => dispatch(returnErrors())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
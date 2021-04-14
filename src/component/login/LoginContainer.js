import {connect} from 'react-redux'
import Login from './Login';
import{
    changeInputLogin,
    loginRequest,
} from "../../action/authActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    username: state.authReducer.loginInfo.username,
    password: state.authReducer.loginInfo.password,
    errors: state.authReducer.errors.login
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    loginRequest: () => dispatch(loginRequest()),
    changeInputLogin: (event) => (
        dispatch(changeInputLogin(event))
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
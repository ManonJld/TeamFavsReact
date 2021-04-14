import {connect} from 'react-redux'
import Register from "./Register";

import{
    changeInputRegister,
    registerRequest,
} from "../../action/authActions";


//envoyer des données dans les props
const mapStateToProps = state => ({
    email: state.authReducer.registerInfo.email,
    password: state.authReducer.registerInfo.password,
    firstname: state.authReducer.registerInfo.firstName,
    lastname: state.authReducer.registerInfo.lastName,
    picture: state.authReducer.registerInfo.profilPicture,
    errors: state.authReducer.errors.registering
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    registerRequest: () => dispatch(registerRequest()),
    changeInputRegister: (event) => (
        dispatch(changeInputRegister(event))
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
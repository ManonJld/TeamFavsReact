import { connect } from 'react-redux';
import Login from './Login';
import{
    loginUser,
    changeInputLoginEmail,
    changeInputLoginPassword
} from "../../action/action";

//envoyer des données dans les props
const mapStateToProps = state => ({
    email: state.front.loginUser.email,
    password: state.front.loginUser.password
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    loginUser: () => dispatch(loginUser()),
    changeInputLoginPassword: password => dispatch(changeInputLoginPassword(password)),
    changeInputLoginEmail: email => dispatch(changeInputLoginEmail(email))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
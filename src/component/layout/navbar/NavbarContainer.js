import {logout} from "../../../action/authActions"
import {connect} from 'react-redux';
import Navbar from "./Navbar";

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
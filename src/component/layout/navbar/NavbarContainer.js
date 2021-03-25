import {logout} from "../../../action/authActions"
import {connect} from 'react-redux';
import Navbar from "./Navbar";

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(
    null,
    mapDispatchToProps
)(Navbar);
import {connect} from 'react-redux'
import MyAccount from "./MyAccount";
import {clearTeams, getTeams} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    token: state.authReducer.authToken,
    teams: state.appReducer.teams,
    isLoading: state.appReducer.isLoading
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    getTeams: () => dispatch(getTeams()),
    clearTeams: () => dispatch(clearTeams()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccount);
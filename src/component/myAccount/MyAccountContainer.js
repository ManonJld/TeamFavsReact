import {connect} from 'react-redux'
import MyAccount from "./MyAccount";
import {clearTeams, getTeams, getCategories, setTeamName} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    token: state.authReducer.authToken,
    teams: state.appReducer.teams,
    isLoadingTeams: state.appReducer.isLoading.teams
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    getTeams: () => dispatch(getTeams()),
    clearTeams: () => dispatch(clearTeams()),
    getCategories: (id) => dispatch(getCategories(id)),
    setTeamName: (name) => dispatch(setTeamName(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccount);
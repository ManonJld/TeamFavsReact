import {connect} from 'react-redux'
import MyAccount from "./MyAccount";
import {getTeams, getCategories, setTeamName, setTeamId} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    token: state.authReducer.authToken,
    teams: state.appReducer.teams,
    isLoadingTeams: state.appReducer.isLoading.teams,
    teamId: state.appReducer.teamId,
    firstname: state.authReducer.user.firstname,
    lastname: state.authReducer.user.lastname,
    picture: state.authReducer.user.picture,
    userId: state.authReducer.user.id
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    getTeams: () => dispatch(getTeams()),
    getCategories: (id) => dispatch(getCategories(id)),
    setTeamName: (name) => dispatch(setTeamName(name)),
    setTeamId: (id) => dispatch(setTeamId(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccount);
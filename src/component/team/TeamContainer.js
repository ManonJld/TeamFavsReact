import {connect} from 'react-redux'
import Team from "./Team";
import {
    clearCategoryClicked,
    clearCategoryName,
    clearTeamName,
    getTeams,
    setTeamId,
    setTeamName
} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    teamName: state.appReducer.teamName,
    categoryName: state.appReducer.categoryName,
    teams: state.appReducer.teams
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearTeamName: () => dispatch(clearTeamName()),
    clearCategoryClicked: () => dispatch(clearCategoryClicked()),
    clearCategoryName: () => dispatch(clearCategoryName()),
    getTeams: () => dispatch(getTeams()),
    setTeamId: (id) => dispatch(setTeamId(id)),
    setTeamName: (name) => dispatch(setTeamName(name))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);
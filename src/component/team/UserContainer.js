import {connect} from 'react-redux'
import User from "./User";
import {
    changeInputApp,
    clearBookmarks,
    clearCategoryClicked,
    getBookmarks,
    setCurrentTeamId
} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    firstname: state.authReducer.user.firstname,
    lastname: state.authReducer.user.lastname,
    picture: state.authReducer.user.picture,
    teams: state.appReducer.teams,
    teamName: state.appReducer.teamName,
    teamId: state.appReducer.teamId,
    currentTeamId: state.appReducer.currentTeamId

})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearBookmarks : () => dispatch(clearBookmarks()),
    getBookmarks: (categoryId) => dispatch(getBookmarks(categoryId)),
    changeInputApp: (event) => dispatch(changeInputApp(event)),
    setCurrentTeamId: (id) => dispatch(setCurrentTeamId(id)),
    clearCategoryClicked: () => dispatch(clearCategoryClicked())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
import {connect} from 'react-redux'
import User from "./User";
import {changeInputApp, clearBookmarks, getBookmarks, setTeamId} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    firstname: state.authReducer.user.firstname,
    lastname: state.authReducer.user.lastname,
    picture: state.authReducer.user.picture,
    // teams: state.appReducer.teams,
    // teamId: state.appReducer.teamId
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearBookmarks : () => dispatch(clearBookmarks()),
    getBookmarks: (categoryId) => dispatch(getBookmarks(categoryId)),
    // changeInputApp: (event) => dispatch(changeInputApp(event))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
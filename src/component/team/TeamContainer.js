import {connect} from 'react-redux'
import Team from "./Team";
import {clearTeamName} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    teamName: state.appReducer.teamName
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearTeamName: () => dispatch(clearTeamName()),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);
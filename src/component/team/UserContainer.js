import {connect} from 'react-redux'
import User from "./User";
import {clearBookmarks, getBookmarks} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    firstname: state.authReducer.user.firstname,
    lastname: state.authReducer.user.lastname,
    picture: state.authReducer.user.picture
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearBookmarks : () => dispatch(clearBookmarks()),
    getBookmarks: (categoryId) => dispatch(getBookmarks(categoryId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
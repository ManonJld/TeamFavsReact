import {connect} from 'react-redux'
import Bookmarks from "./Bookmarks";
import {} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({

})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bookmarks);
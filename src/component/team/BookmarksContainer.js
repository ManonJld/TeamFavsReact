import {connect} from 'react-redux'
import Bookmarks from "./Bookmarks";
import {clearBookmarks, getBookmarks} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    isLoadingBookmark: state.appReducer.isLoading.bookmarks,
    bookmarks: state.appReducer.bookmarks,
    categoryId: state.appReducer.categoryId
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearBookmarks : () => dispatch(clearBookmarks()),
    getBookmarks: (categoryId) => dispatch(getBookmarks(categoryId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bookmarks);
import {connect} from 'react-redux'
import Categories from "./Categories";
import {clearCategories, getBookmarks, getCategories, setCategoryId} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    categories: state.appReducer.categories,
    isLoadingCate: state.appReducer.isLoading.categories
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearCategories: () => dispatch(clearCategories()),
    getCategories: (id) => dispatch(getCategories(id)),
    setCategoryId: (id) => dispatch(setCategoryId(id)),
    getBookmarks: (id) => dispatch(getBookmarks(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
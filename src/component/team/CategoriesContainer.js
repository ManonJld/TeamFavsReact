import {connect} from 'react-redux'
import Categories from "./Categories";
import {
    clearCategories,
    clearCategoryId,
    getBookmarks,
    getCategories,
    setCategoryId,
    setCategoryName, setCurrentCategoryId
} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    categories: state.appReducer.categories,
    isLoadingCate: state.appReducer.isLoading.categories,
    categoryId: state.appReducer.categoryId,
    teamId: state.appReducer.teamId
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    clearCategories: () => dispatch(clearCategories()),
    getCategories: (id) => dispatch(getCategories(id)),
    setCategoryId: (id) => dispatch(setCategoryId(id)),
    getBookmarks: (id) => dispatch(getBookmarks(id)),
    clearCategoryId: () => dispatch(clearCategoryId()),
    setCategoryName: (id) => dispatch(setCategoryName(id)),
    setCurrentCategoryId: (id) => dispatch(setCurrentCategoryId(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
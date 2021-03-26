import {connect} from 'react-redux'
import Categories from "./Categories";
import {} from "../../action/appActions";


//envoyer des données dans les props
//authReducer and errorReducer comes from the file reducer.js
const mapStateToProps = state => ({
    categories: state.appReducer.categories,
    isLoadingCate: state.appReducer.isLoading.categories
})

//envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
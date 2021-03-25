import {combineReducers} from "redux";
// import front from './front'
import authReducer from './authReducer';
import errorReducer from './errorReducer'
//si autre reducer, il faut l'importer au dessus et le rajouter dans les accolades en dessous


export default combineReducers({
    errorReducer,
    authReducer
});
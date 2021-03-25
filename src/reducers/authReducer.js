import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CHANGE_INPUT_LOGIN_EMAIL,
    CHANGE_INPUT_LOGIN_PASSWORD,
} from "../action/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    email: "test",
    loginInfo:{
        username:"",
        password:""
    }
};

function authReducer(state = initialState, action){
    switch (action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };

        case LOGIN_REQUEST:{
            return {
                ...state,
                isAuthenticated: false,
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                //will contain the user and the token
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                loginInfo: {username: "", password: ""}
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        case CHANGE_INPUT_LOGIN_PASSWORD:
            return {
                ...state,
                loginInfo: {...state.loginInfo, password: action.payload}
            };
        case CHANGE_INPUT_LOGIN_EMAIL:
            return{
                ...state,
                loginInfo: {...state.loginInfo, username: action.payload}
            };
        default:
            return state
    }
}

export default authReducer;
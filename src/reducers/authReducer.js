import jwtDecode from "jwt-decode";

import {
    AUTH_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CHANGE_INPUT_LOGIN,
    SETUP_PENDING,
    SETUP_SUCCESS,
    SETUP_FAILURE
} from "../action/types"


const initialState = {
    authToken: localStorage.getItem('authToken'),
    isAuthenticated: null,
    isLoading: false,
    user: {},
    loginInfo:{
        username:"",
        password:""
    },
};

function authReducer(state = initialState, action){
    switch (action.type){
        case LOGIN_REQUEST:{
            return {
                ...state,
                isAuthenticated: false,
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            const tokenJwt = action.payload.token
            localStorage.setItem('authToken', tokenJwt)
            return{
                ...state,
                authToken: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
                loginInfo: {username: "", password: ""},
                user:  jwtDecode(tokenJwt),
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
            localStorage.removeItem('authToken');
            return{
                ...state,
                authToken: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        case CHANGE_INPUT_LOGIN:
            const { name, value } = action.payload.target;
            return {

                ...state,
                loginInfo: {...state.loginInfo, [name]: value}
            };
        case SETUP_PENDING:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: true,
            };
        case SETUP_SUCCESS:
            const tokenJwt2 = localStorage.getItem('authToken');
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: jwtDecode(tokenJwt2)
            }
        case SETUP_FAILURE:
            return{
                ...state,
                isAuthenticated: false,
                isLoading: false,
            }
        default:
            return state
    }
}

export default authReducer;
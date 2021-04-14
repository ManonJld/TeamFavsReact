import axios from "axios";
import jwtDecode from "jwt-decode";

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CHANGE_INPUT_LOGIN,
    CHANGE_INPUT_REGISTER,
    SETUP_SUCCESS,
    SETUP_FAILURE,
} from "../action/types"

export function registerRequest(){
    return (dispatch, getState) => {
        const state = getState();
        const register = state.authReducer.registerInfo
        console.log(register)
        axios
            .post(process.env.REACT_APP_API_URL + "/users", register)
            .then(response => response.data)
            .then(data => {//je stocke mon token dans le local storage
                dispatch({type: REGISTER_SUCCESS, payload: data})
                //On previent axios qu'on a maintenant un header par défaut sur toutes nos futures requetes http
                setAxiosToken(data.token)})
            .catch(error => {
                dispatch({type: REGISTER_FAIL, payload: error.response.data});

            });
    }
}

export function loginRequest(){
    return (dispatch, getState) => {
        const state = getState();
        const loginInfo = state.authReducer.loginInfo
        console.log(loginInfo);
        dispatch({type: LOGIN_REQUEST});
        axios
            .post(process.env.REACT_APP_API_URL + "/login_check", loginInfo)
            .then(response => response.data)
            .then(data => {//je stocke mon token dans le local storage
                dispatch({type: LOGIN_SUCCESS, payload: data})
                //On previent axios qu'on a maintenant un header par défaut sur toutes nos futures requetes http
                setAxiosToken(data.token)})
            .catch(error => {
                dispatch({type: LOGIN_FAIL, payload: error.response.data});
            });
        }
}


export function setup(){
    return (dispatch) => {
        const token = window.localStorage.getItem("authToken")
        if(token){
            const jwtData = jwtDecode(token)
            console.log(jwtData)
            if(jwtData.exp*1000 > new Date().getTime()){
                setAxiosToken(token);
                dispatch({type: SETUP_SUCCESS});
            } else {
                dispatch({type: SETUP_FAILURE})
                logout();
            }
        } else {
            dispatch({type: SETUP_FAILURE})
            logout();
        }
    }
}

function setAxiosToken(token)
{
    axios.defaults.headers['Authorization'] = "Bearer " + token;
    console.log(axios.defaults.headers['Authorization'])
}

export function logout()
{
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
    return{type: LOGOUT_SUCCESS}
}

export function changeInputLogin(event){
    return {type: CHANGE_INPUT_LOGIN, payload: event};
}

export function changeInputRegister(event){
    return {type: CHANGE_INPUT_REGISTER, payload: event};
}


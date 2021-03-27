import axios from "axios";
import {returnErrors} from "./errorActions";
import jwtDecode from "jwt-decode";

import {
    // USER_LOADING,
    // USER_LOADED,
    // AUTH_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    // REGISTER_SUCCESS,
    // REGISTER_FAIL,
    CHANGE_INPUT_LOGIN_PASSWORD,
    CHANGE_INPUT_LOGIN_EMAIL,
    // SETUP_PENDING,
    SETUP_SUCCESS,
    SETUP_FAILURE
} from "../action/types"

// //check token and load user
// export const loadUser = () => (dispatch, getState) => {
//     //user loading
//     dispatch({type: USER_LOADING});
//
//
//     axios.get(process.env.REACT_APP_API_URL + '/login_check', tokenConfig(getState))
//         .then(res => dispatch({
//             type: USER_LOADED,
//             payload: res.data
//         }))
//         .catch(err => {
//             dispatch(returnErrors(err.response.data, err.response.status));
//             dispatch({
//                 type: AUTH_ERROR
//             });
//         });
// };

// //setup config/header and token
// export const tokenConfig = getState => {
//     //get token from local storage
//     const token = getState().authReducer.token;
//     //headers
//     const config = {
//         headers: {
//             "Content-type": "application/json"
//         }
//     }
//     //if token, add to headers
//     if(token){
//         config.headers['x-auth-token'] = token;
//     }
//     return config;
// };

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
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status));
                dispatch({
                    type: LOGIN_FAIL
                });

            });
        }
}

export function setup(){
    return (dispatch) => {
        const token = window.localStorage.getItem("authToken")
        // dispatch({type: SETUP_PENDING});
        if (token === undefined){
            console.log("token undefined")
            dispatch({type: SETUP_FAILURE})
        } else if (token){
            const jwtData = jwtDecode(token)
            console.log(jwtData)
            if(jwtData.exp*1000 > new Date().getTime()){
                console.log("OK");
                setAxiosToken(token);
                dispatch({type: SETUP_SUCCESS});
            }

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



export function changeInputLoginEmail(value){
    return {type: CHANGE_INPUT_LOGIN_EMAIL, payload: value};
}

export function changeInputLoginPassword(value){
    return {type: CHANGE_INPUT_LOGIN_PASSWORD, payload: value};
}
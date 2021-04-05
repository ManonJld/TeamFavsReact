import axios from "axios";
import {returnErrors} from "./errorActions";
import jwtDecode from "jwt-decode";

import {
    // AUTH_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    // REGISTER_SUCCESS,
    // REGISTER_FAIL,
    CHANGE_INPUT_LOGIN,
    // SETUP_PENDING,
    SETUP_SUCCESS,
    SETUP_FAILURE
} from "../action/types"


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
                // dispatch(returnErrors(err.response.data, err.response.status));
                console.log(err);
                dispatch({
                    type: LOGIN_FAIL
                });

            });
        }
}
//function to know if the user is already connecting when loading the app
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
                //au rechargement de la page, le token stocké côté axios disparait, il faut donc le stocker à nouveau si le token est toujours valide
                setAxiosToken(token);
                dispatch({type: SETUP_SUCCESS});
            }
            //voir si la redirection fonctionne avec ça
            dispatch({type: SETUP_FAILURE})
        }
        //voir si la redirection fonctionne avec ça TODO: non, marche toujours pas (test avec l'ajout juste au dessus)
        dispatch({type: SETUP_FAILURE})

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


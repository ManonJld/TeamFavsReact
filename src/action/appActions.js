import axios from "axios";

import {
    GET_TEAMS_PENDING,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,
    CLEAR_TEAMS,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    SET_TEAM_NAME,
    CLEAR_TEAM_NAME
} from "../action/types"
import {returnErrors} from "./errorActions";

export function getTeams(){
    return (dispatch) => {
        dispatch({type: GET_TEAMS_PENDING});
        axios
            .get(process.env.REACT_APP_API_URL + "/teams")
            .then(response => response.data)
            .then(data => dispatch({type: GET_TEAMS_SUCCESS, payload: data['hydra:member']}))
            .catch(error => {
                dispatch(returnErrors(error.response.data))
                dispatch({type: GET_TEAMS_FAILURE})
            });
    };
}

export function clearTeams(){
    return {type: CLEAR_TEAMS}
}

export function getCategories(id){
    return (dispatch) =>{
        dispatch({type: GET_CATEGORIES_PENDING});
        axios
            .get(process.env.REACT_APP_API_URL + "/teams/" + id + "/categories" )
            .then(response => response.data)
            .then(data => dispatch({type: GET_CATEGORIES_SUCCESS, payload: data['hydra:member']}))
            .catch(error => {
                dispatch(returnErrors(error.response.data))
                dispatch({type: GET_CATEGORIES_FAILURE})
            })
    }
}

export function setTeamName(value){
    return {type: SET_TEAM_NAME, payload: value};
}

export function clearTeamName(){
    return {type: CLEAR_TEAM_NAME};
}
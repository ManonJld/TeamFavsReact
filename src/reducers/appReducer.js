import {
    GET_TEAMS_FAILURE,
    GET_TEAMS_PENDING,
    GET_TEAMS_SUCCESS,
    CLEAR_TEAMS,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    SET_TEAM_NAME,
    CLEAR_TEAM_NAME

} from "../action/types"

const initialState = {
    teams:[],
    categories:[],
    isLoading:{
        teams: false,
        categories: false
    },
    teamName:""
}

function appReducer(state = initialState, action){
    switch (action.type){
        case GET_TEAMS_PENDING:
            return {
                ...state,
                isLoading: {...state.isLoading, teams: true}
            };
        case GET_TEAMS_SUCCESS:
            return {
                ...state,
                isLoading: {...state.isLoading, teams: false},
                teams: action.payload
            };
        case GET_TEAMS_FAILURE:
            return{
                ...state,
                isLoading: {...state.isLoading, teams: false},
            };
        case CLEAR_TEAMS:
            return {
                ...state,
                teams: []
            }
        case GET_CATEGORIES_PENDING:
            return{
                ...state,
                isLoading: {...state.isLoading, categories: true},
            }
        case GET_CATEGORIES_SUCCESS:
            return{
                ...state,
                isLoading: {...state.isLoading, categories: false},
                categories: action.payload
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: {...state.isLoading, categories: false},
            }
        case SET_TEAM_NAME:
            return {
                ...state,
                teamName: action.payload
            }
        case CLEAR_TEAM_NAME:{
            return {
                ...state,
                teamName: ""
            }
        }
        default:
            return state
    }
}

export default appReducer;
import {
    GET_TEAMS_FAILURE,
    GET_TEAMS_PENDING,
    GET_TEAMS_SUCCESS,
    CLEAR_TEAMS

} from "../action/types"

const initialState = {
    teams:[],
    isLoading:false
}

function appReducer(state = initialState, action){
    switch (action.type){
        case GET_TEAMS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case GET_TEAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                teams: action.payload
            };
        case GET_TEAMS_FAILURE:
            return{
                ...state
            };
        case CLEAR_TEAMS:
            return {
                ...state,
                teams: []
            }
        default:
            return state
    }
}

export default appReducer;
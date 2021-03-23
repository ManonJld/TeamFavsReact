import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    CHANGE_INPUT_LOGIN_EMAIL,
    CHANGE_INPUT_LOGIN_PASSWORD
} from "../action/action";

const initialState = {
    loading: {
      loginUser: false
    },
    error:{
      loginUser: null
    },
    loginUser: {
        email: "",
        password: "",
    },
}

function front(state = initialState, action){
    switch (action.type){
        //loginUser
        case LOGIN_USER_PENDING:
            return {
                ...state,
                loading: {...state.loading, loginUser: true}
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginUser: initialState.loginUser,
                loading: {...state.loading, loginUser: false}
            };
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                error: {...state.error, loginUser: action.payload},
                loading: {...state.loading, loginUser: false}
            };
        case CHANGE_INPUT_LOGIN_EMAIL:
            return {...state, loginUser: {...state.loginUser, email: action.payload}};
        case CHANGE_INPUT_LOGIN_PASSWORD:
            return {...state, loginUser: {...state.loginUser, password: action.payload}};
        default:
            return state;
    }
}

export default front;
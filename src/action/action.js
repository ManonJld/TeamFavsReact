export function loginUser(){
    return (dispatch, getState) => {
        console.log(loginUser)
        const state = getState();
        const email = state.front.loginUser.email;
        const password = state.front.loginUser.password;
        dispatch(loginUserPending());
        fetch(process.env.REACT_APP_API_URL + "/login_check", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: email, password: password})
        })
            .then(response => response.json())
            .then(data => dispatch(loginUserSuccess(data)))
            .catch(err => {
                console.log(err)
                return dispatch(loginUserFailure(err))
            })
    }
}

export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
function loginUserPending(){
    return {type: LOGIN_USER_PENDING};
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
function loginUserSuccess(loginUser){
    return {type: LOGIN_USER_SUCCESS, payload: loginUser};
}

export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
function loginUserFailure(error){
    return {type: LOGIN_USER_FAILURE, payload: error}
}

//form login actions

export const CHANGE_INPUT_LOGIN_EMAIL = 'CHANGE_INPUT_LOGIN_EMAIL';
export function changeInputLoginEmail(value){
    return {type: CHANGE_INPUT_LOGIN_EMAIL, payload: value};
}

export const CHANGE_INPUT_LOGIN_PASSWORD = 'CHANGE_INPUT_LOGIN_PASSWORD';
export function changeInputLoginPassword(value){
    return {type: CHANGE_INPUT_LOGIN_PASSWORD, payload: value};
}
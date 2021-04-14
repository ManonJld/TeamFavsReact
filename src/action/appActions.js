import axios from "axios";

import {
    GET_TEAMS_PENDING,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,
    CLEAR_TEAMS,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    SET_CATEGORY_ID,
    SET_TEAM_ID,
    SET_TEAM_NAME,
    CLEAR_TEAM_NAME,
    GET_BOOKMARKS_PENDING,
    GET_BOOKMARKS_SUCCESS,
    GET_BOOKMARKS_FAILURE,
    CLEAR_BOOKMARKS,
    CLEAR_CATEGORIES,
    CHANGE_INPUT_APP,
    POST_NEWTEAM_PENDING,
    POST_NEWTEAM_SUCCESS,
    POST_NEWTEAM_FAILURE,
    POST_NEWCATEGORY_PENDING,
    POST_NEWCATEGORY_SUCCESS,
    POST_NEWCATEGORY_FAILURE,
    POST_NEWBOOKMARK_PENDING,
    POST_NEWBOOKMARK_SUCCESS,
    POST_NEWBOOKMARK_FAILURE,
    CHANGE_INPUT_NEW_BOOKMARK,
    CLEAR_CATEGORY_ID,
    SET_ALL_BOOKMARKS_BY_TEAM,
    CATEGORY_CLICKED,
    CLEAR_CATEGORY_CLICKED,
    SET_CATEGORY_NAME,
    CLEAR_CATEGORY_NAME,
    CHANGE_INPUT_EDIT_BOOKMARK,
    SET_EDIT_BOOKMARK,
    PUT_BOOKMARK_PENDING,
    PUT_BOOKMARK_SUCCESS,
    PUT_BOOKMARK_FAILURE
} from "../action/types";

export function getTeams(){
    return (dispatch) => {
        dispatch({type: GET_TEAMS_PENDING});
        axios
            .get(process.env.REACT_APP_API_URL + "/teams")
            .then(response => response.data)
            .then(data => dispatch({type: GET_TEAMS_SUCCESS, payload: data['hydra:member']}))
            .catch(error => {
                dispatch({type: GET_TEAMS_FAILURE, payload: error.response.data})
            });
    };
}

export function clearTeams(){
    return {type: CLEAR_TEAMS}
}
export function setTeamId(value){
    console.log(value)
    return {type: SET_TEAM_ID, payload: value};

}

export function setTeamName(value){
    return {type: SET_TEAM_NAME, payload: value};
}

export function clearTeamName(){
    return {type: CLEAR_TEAM_NAME};
}
export function clearCategoryId(){
    return {type: CLEAR_CATEGORY_ID};
}


export function getCategories(id){
    return (dispatch) =>{
        dispatch({type: GET_CATEGORIES_PENDING});
        axios
            .get(process.env.REACT_APP_API_URL + "/teams/" + id + "/categories" )
            .then(response => response.data)
            .then(data => dispatch({type: GET_CATEGORIES_SUCCESS, payload: data['hydra:member']}))
            .catch(error => {
                dispatch({type: GET_CATEGORIES_FAILURE, payload: error.response.data})
            })
    }
}
export function setCategoryId(value){
    return {type: SET_CATEGORY_ID, payload: value};
}

export function clearCategories(){
    return {type: CLEAR_CATEGORIES}
}

export function getBookmarks(id){
    return (dispatch) => {
        console.log("bookmark")
        dispatch({type: GET_BOOKMARKS_PENDING});
        axios
            .get(process.env.REACT_APP_API_URL + "/categories/" + id + "/bookmarks")
            .then(response => response.data)
            .then(data => {
                dispatch(categoryClicked())
                dispatch({type: GET_BOOKMARKS_SUCCESS, payload: data['hydra:member']})
            })
            .catch(error => {
                dispatch({type: GET_BOOKMARKS_FAILURE, payload: error.response.data})
            })
    }
}

export function setCategoryName(id){
    return (dispatch, getState) => {
        const categories = getState().appReducer.categories;
        const category = categories.filter(category => category.id === id);
        // console.log(category);
        const categoryName = category[0].name;
        // console.log(categoryName);
        dispatch({type: SET_CATEGORY_NAME, payload: categoryName})
    }
}

export function clearCategoryName(){
    return {type: CLEAR_CATEGORY_NAME}
}

export function categoryClicked(){
    return {type: CATEGORY_CLICKED}
}

export function clearCategoryClicked(){
    return {type: CLEAR_CATEGORY_CLICKED}
}

export function clearBookmarks(){
    return {type: CLEAR_BOOKMARKS}
}

export function changeInputApp(event){
    return {type: CHANGE_INPUT_APP, payload: event};
}

export function changeInputNewBookmark(event){
    console.log(event.target)
    return {type: CHANGE_INPUT_NEW_BOOKMARK, payload: event}
}

export function changeInputEditBookmark(event){
    console.log(event.target)
    return {type: CHANGE_INPUT_EDIT_BOOKMARK, payload: event}
}

export function setEditBookmark(value){
    return {type: SET_EDIT_BOOKMARK, payload: value}
}

export function postTeam(){
    return(dispatch, getState) =>{
        const newTeam = getState().appReducer.newTeam;
        dispatch({type: POST_NEWTEAM_PENDING});
        axios
            .post(process.env.REACT_APP_API_URL + "/teams", {name: newTeam})
            .then(response =>response.data)
            .then(data => dispatch({type: POST_NEWTEAM_SUCCESS, payload: data}))
            .catch(error=> {
                dispatch({type:POST_NEWTEAM_FAILURE, payload: error.response.data})
            })
    }
}

export function postCategory(){
    return(dispatch, getState) =>{
        const newCategory = getState().appReducer.newCategory;
        const teamId = getState().appReducer.teamId;
        dispatch({type: POST_NEWCATEGORY_PENDING});
        axios
            .post(process.env.REACT_APP_API_URL + "/categories", {name: newCategory, team:"api/teams/" + teamId})
            .then(response =>response.data)
            .then(data => dispatch({type: POST_NEWCATEGORY_SUCCESS, payload: data}))
            .catch(error=> {
                dispatch({type:POST_NEWCATEGORY_FAILURE, payload: error.response.data})
            })
    }
}


export function postBookmark(){
    return(dispatch, getState) =>{
        const newBookmark = getState().appReducer.newBookmark;
        dispatch({type: POST_NEWBOOKMARK_PENDING});
        axios
            .post(process.env.REACT_APP_API_URL + "/bookmarks", newBookmark)
            .then(response =>response.data)
            .then(data => dispatch({type: POST_NEWBOOKMARK_SUCCESS, payload: data}))
            .catch(error=> {
                dispatch({type:POST_NEWBOOKMARK_FAILURE, payload: error.response.data})
            })
    }
}

export function putBookmark(){
    return(dispatch, getState) => {
        const bookmark = getState().appReducer.editBookmark;
        delete bookmark.category;
        delete bookmark.user;
        dispatch({type: PUT_BOOKMARK_PENDING});
        axios
            .put(process.env.REACT_APP_API_URL + "/bookmarks/" + bookmark.id, bookmark)
            .then(response =>response.data)
            .then(data => dispatch({type: PUT_BOOKMARK_SUCCESS, payload: data}))
            .catch(error => {
                dispatch({type: PUT_BOOKMARK_FAILURE, payload: error.response.data})
            })

    }
}
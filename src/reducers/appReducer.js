import {
    GET_TEAMS_FAILURE,
    GET_TEAMS_PENDING,
    GET_TEAMS_SUCCESS,
    CLEAR_TEAMS,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    SET_CATEGORY_ID,
    SET_TEAM_NAME,
    CLEAR_TEAM_NAME,
    GET_BOOKMARKS_PENDING,
    GET_BOOKMARKS_SUCCESS,
    GET_BOOKMARKS_FAILURE,
    CLEAR_BOOKMARKS,
    CLEAR_CATEGORIES,
    SET_TEAM_ID,
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
    LOGOUT_SUCCESS,
    CHANGE_INPUT_NEW_BOOKMARK,
    CLEAR_CATEGORY_ID,
    CATEGORY_CLICKED,
    CLEAR_CATEGORY_CLICKED,
    SET_CATEGORY_NAME,
    CLEAR_CATEGORY_NAME

} from "../action/types"

const initialState = {
    teams:[],
    categories:[],
    isLoading:{
        teams: false,
        categories: false,
        bookmarks: false,
        newTeam: false,
        newCategory: false,
        newBookmark: false
    },
    teamName:"",
    bookmarks: [],
    teamId:"",
    categoryId:"",
    newTeam:"",
    newCategory:"",
    newBookmark:{
        name:"",
        url:"",
        category:"",
        image:"",
        description:""
    },
    categoryClicked:false,
    categoryName:""

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
                teams: initialState.teams
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
                teamName: initialState.teamName
            }
        }
        case SET_TEAM_ID:{
            return {
                ...state,
                teamId: action.payload
            }
        }
        case GET_BOOKMARKS_PENDING:{
            return{
                ...state,
                isLoading: {...state.isLoading, bookmarks: true}
            }
        }
        case GET_BOOKMARKS_SUCCESS: {
            return {
                ...state,
                isLoading: {...state.isLoading, bookmarks: false},
                bookmarks: action.payload
            }
        }
        case GET_BOOKMARKS_FAILURE: {
            return {
                ...state,
                isLoading: {...state.isLoading, bookmarks: false},
            }
        }
        case CLEAR_BOOKMARKS:{
            return {
                ...state,
                bookmarks: initialState.bookmarks
            }
        }
        case CLEAR_CATEGORIES:{
            return {
                ...state,
                categories: initialState.categories
            }
        }
        case SET_CATEGORY_ID:{
            return {
                ...state,
                categoryId: action.payload
            }
        }
        case CHANGE_INPUT_APP:{
            const { name, value } = action.payload.target;
            return {
                ...state,
                [name]: value
            };
        }
        case POST_NEWTEAM_PENDING:{
            return {
                ...state,
                isLoading: {...state.isLoading, newTeam: true}
            };
        }
        case POST_NEWTEAM_SUCCESS:{
            return {
                ...state,
                isLoading: {...state.isLoading, newTeam: false},
                teams: [...state.teams, action.payload],
                newTeam: initialState.newTeam
            };
        }
        case POST_NEWTEAM_FAILURE:{
            return{
                ...state,
                isLoading: {...state.isLoading, newTeam: false}
            };
        }
        case POST_NEWCATEGORY_PENDING:{
            return{
                ...state,
                isLoading: {...state.isLoading, newCategory: true}
            }
        }
        case POST_NEWCATEGORY_SUCCESS:{
            return {
                ...state,
                isLoading: {...state.isLoading, newCategory: false},
                newCategory: initialState.newCategory,
                categories: [...state.categories, action.payload]
            }
        }
        case POST_NEWCATEGORY_FAILURE:{
            return {
                ...state,
                isLoading: {...state.isLoading, newCategory: false}
            }
        }
        case POST_NEWBOOKMARK_PENDING:{
            return {
                ...state,
                isLoading: {...state.isLoading, newBookmark: true }
            }
        }
        case POST_NEWBOOKMARK_SUCCESS:{
            return {
                ...state,
                isLoading: {...state.isLoading, newBookmark: false },
                bookmarks: [...state.bookmarks, action.payload],
                newBookmark: initialState.newBookmark
            }
        }
        case POST_NEWBOOKMARK_FAILURE:{
            return{
                ...state,
                isLoading: {...state.isLoading, newBookmark: false },
            }
        }
        case LOGOUT_SUCCESS:{
            return initialState
        }
        case CHANGE_INPUT_NEW_BOOKMARK:{
            const { name, value } = action.payload.target;
            return {
                ...state,
                newBookmark: {...state.newBookmark, [name]: value }
            }
        }
        case CLEAR_CATEGORY_ID:{
            return{
                ...state,
                categoryId: initialState.categoryId
            }
        }
        case CATEGORY_CLICKED:{
            return {
                ...state,
                categoryClicked: true
            }
        }
        case CLEAR_CATEGORY_CLICKED:{
            return {
                ...state,
                categoryClicked: initialState.categoryClicked
            }
        }
        case SET_CATEGORY_NAME:{
            return {
                ...state,
                categoryName: action.payload
            }
        }
        case CLEAR_CATEGORY_NAME:{
            return {
                ...state,
                categoryName: initialState.categoryName
            }
        }

        default:
            return state
    }
}

export default appReducer;
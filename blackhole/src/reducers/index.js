import {
    USER_UNAUTHORIZED,
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    ADD_START,
    ADD_SUCCESS,
    DELETE_START,
    DELETE_SUCCESS,
    EDIT_START,
    EDIT_SUCCESS
  } from "../actions";
  
  const initialState = {
    notes:[],
    users: [],
    loggingIn: false,
    token: localStorage.getItem("token"),
    fetchingNotes: false,
    addingNotes: false,
    updatingNotes: false,
    deletingNotes: false,
    error: null,
    errorStatusCode: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case FETCH_DATA_START:
        return {
          ...state,
          fetchingNotes: true
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: "",
          errorStatusCode: null,
          fetchingNotes: false,
          notes: action.payload
        };

        case ADD_START:
        return {
          ...state,
          addingNotes: true
        };
    
        case ADD_SUCCESS:
        return {
          ...state,
          addingNotes: false,
          error:'',
          notes: action.payload.notes
        };

      case DELETE_START:
        return {
          ...state,
          deletingNotes: true
        };
      case DELETE_SUCCESS:
        return {
          ...state,
          deletingNotes: false,
          error: "",
          errorStatusCode: null,
          notes: action.payload
        };

        case EDIT_START:
          return {
            ...state,
            updatingNotes: true
          }

          case EDIT_SUCCESS:
            return {
              ...state,
              updatingNotes: false,
              notes: action.payload
            }

      case USER_UNAUTHORIZED:
        return {
          ...state,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status,
          fetchingNotes: false
        };
  
      default:
        return state;
    }
  };
  
import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios.post("https://blackhole-backend.herokuapp.com/api/auth/login", creds)
  .then(res => {
    console.log(res.data)
    localStorage.setItem("token", res.data.token)
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  });
};



 export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const register = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios.post("https://blackhole-backend.herokuapp.com/api/auth/register", creds)
  .then(res => {
    console.log(res.data)
    localStorage.setItem("token", res.data.token)
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
  });
};


// Used to fetch data from server

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const USER_UNAUTHORIZED = "FETCH_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://blackhole-backend.herokuapp.com/getmessages", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err.response });
      }
    });
};


export const ADD_START = 'ADD_START';
export const ADD_SUCCESS='ADD_SUCCESS';

export const addNote = newNote => dispatch => {
  dispatch({ type: ADD_START });

  return axios
    .post('https://blackhole-backend.herokuapp.com/postmessage', newNote)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err));
}



// used to delete a note by taking in it's id

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_AILURE";

export const deleteNotes = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`http://localhost:3333/api/notes/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err.response });
      }
    });
};

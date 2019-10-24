import axios from "axios";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import history from "../History/history";

export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginUser = (username, password) => dispatch => {
  dispatch({ type: START_LOGIN });
  axios
    .post(
      "https://nbapredictor-backend.herokuapp.com/login",
      `grant_type=password&username=${username}&password=${password}`,
      {
        headers: {
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      localStorage.setItem("token", res.data.access_token);
      dispatch({ type: LOGIN_SUCCESS });
      history.push("/");
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const START_REGISTER = "START_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerUser = newRegister => dispatch => {
  dispatch({ type: START_REGISTER });
  axios
    .post(`https://nbapredictor-backend.herokuapp.com/signup`, newRegister)
    .then(res => {
      localStorage.setItem("token", res.data.access_token);

      dispatch({ type: REGISTER_SUCCESS });
      history.push("/");
    })
    .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

export const START_LOGOUT = "START_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const logoutUser = () => dispatch => {
  dispatch({ type: START_LOGOUT });
  axiosWithAuth()
    .get("logout")
    .then(res => {
      localStorage.removeItem("token");

      dispatch({ type: LOGOUT_SUCCESS });
      history.push("/login");
    })
    .catch(err => dispatch({ type: LOGOUT_FAILURE, payload: err }));
};

export const START_FETCHPLAYERS = "START_FETCHPLAYERS";
export const FETCHPLAYERS_SUCCESS = "FETCHPLAYERS_SUCCESS";
export const FETCHPLAYERS_FAILURE = "FETCHPLAYERS_FAILURE";
export const fetchSavedPlayers = () => dispatch => {
  dispatch({ type: START_FETCHPLAYERS });

  axiosWithAuth()
    .get("players/all")
    .then(res => dispatch({ type: FETCHPLAYERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHPLAYERS_FAILURE, payload: err }));
};

export const START_DELETEPLAYER = "START_DELETEPLAYER";
export const DELETEPLAYER_SUCCESS = "DELETEPLAYER_SUCCESS";
export const DELETEPLAYER_FAILURE = "DELETEPLAYER_FAILURE";
export const deletePlayer = id => dispatch => {
  dispatch({ type: START_DELETEPLAYER });

  axiosWithAuth()
    .delete(`players/delete/${id}`)
    .then(res => dispatch({ type: DELETEPLAYER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETEPLAYER_FAILURE, payload: err }));
};

export const START_SAVEPLAYER = "START_SAVEPLAYER";
export const SAVEPLAYER_SUCCESS = "SAVEPLAYER_SUCCESS";
export const SAVEPLAYER_FAILURE = "SAVEPLAYER_FAILURE";
export const savePlayer = player => dispatch => {
  dispatch({ type: START_SAVEPLAYER });

  axiosWithAuth()
    .post(`players/createplayer`, player)
    .then(res => dispatch({ type: SAVEPLAYER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SAVEPLAYER_FAILURE, payload: err }));
};

export const START_EDITPLAYER = "START_EDITPLAYER";
export const EDITPLAYER_SUCCESS = "EDITPLAYER_SUCCESS";
export const EDITPLAYER_FAILURE = "EDITPLAYER_FAILURE";
export const editPlayer = (id, player) => dispatch => {
  dispatch({ type: START_EDITPLAYER });

  axiosWithAuth()
    .put(`/players/update/${id}`, player)
    .then(res => dispatch({ type: EDITPLAYER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: EDITPLAYER_FAILURE, payload: err }));
};

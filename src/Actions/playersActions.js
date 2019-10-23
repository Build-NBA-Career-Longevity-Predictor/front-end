import axios from "axios";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

export const START_FETCHPLAYERSLIST = "START_FETCHPLAYERSLIST";
export const FETCHPLAYERSLIST_SUCCESS = "FETCHPLAYERSLIST_SUCCESS";
export const FETCHPLAYERSLIST_FAILURE = "FETCHPLAYERSLIST_FAILURE";
export const fetchPlayerList = () => dispatch => {
  dispatch({ type: START_FETCHPLAYERSLIST });
  axios
    .get("http://nba-pred.herokuapp.com/players")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHPLAYERSLIST_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: FETCHPLAYERSLIST_FAILURE, payload: err }));
};

export const START_FETCHPLAYER = "START_FETCHPLAYER";
export const FETCHPLAYER_SUCCESS = "FETCHPLAYER_SUCCESS";
export const FETCHPLAYER_FAILURE = "FETCHPLAYER_FAILURE";
export const fetchPlayer = id => dispatch => {
  dispatch({ type: START_FETCHPLAYER });

  axiosWithAuth()
    .get(`players/${id}`)
    .then(res => dispatch({ type: FETCHPLAYER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHPLAYER_FAILURE, payload: err }));
};

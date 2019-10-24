import axios from "axios";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const convertData = data => {
  return {
    imgurl: data[0].img,
    name: data[0].player,
    position: data[0].position,
    height: data[0].height,
    weight: data[0].weight,
    college: data[0].college,
    draft_year: data[0].draft_yr,
    draft_pick: data[0].pick,
    drafted_by: data[0].drafted_by,
    pts_pg: data[0].pts_pg,
    rebounds_pg: data[0].trb_pg,
    assists_pg: data[0].ast_pg,
    mins_pg: data[0].min_pg,
    prediction: data[0].pred_yrs,
    similarplayers: [
      {
        imgurl: data[1].img,
        name: data[1].player,
        position: data[1].position,
        height: data[1].height,
        weight: data[1].weight,
        college: data[1].college,
        draft_year: data[1].draft_yr,
        draft_pick: data[1].pick,
        drafted_by: data[1].drafted_by,
        pts_pg: data[1].pts_pg,
        rebounds_pg: data[1].trb_pg,
        assists_pg: data[1].ast_pg,
        mins_pg: data[1].min_pg
      }
    ]
  };
};

export const START_FETCHPLAYERSLIST = "START_FETCHPLAYERSLIST";
export const FETCHPLAYERSLIST_SUCCESS = "FETCHPLAYERSLIST_SUCCESS";
export const FETCHPLAYERSLIST_FAILURE = "FETCHPLAYERSLIST_FAILURE";
export const fetchPlayerList = () => dispatch => {
  dispatch({ type: START_FETCHPLAYERSLIST });
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/http://nba-pred.herokuapp.com/players"
    )
    .then(res =>
      dispatch({ type: FETCHPLAYERSLIST_SUCCESS, payload: res.data.flat() })
    )
    .catch(err => dispatch({ type: FETCHPLAYERSLIST_FAILURE, payload: err }));
};

export const START_FETCHSTATS = "START_FETCHSTATS";
export const FETCHSTATS_SUCCESS = "FETCHSTATS_SUCCESS";
export const FETCHSTATS_FAILURE = "FETCHSTATS_FAILURE";
export const fetchStats = name => dispatch => {
  dispatch({ type: START_FETCHSTATS });

  axiosWithAuth()
    .get(
      `https://cors-anywhere.herokuapp.com/http://nba-pred.herokuapp.com/${name}`
    )
    .then(res =>
      dispatch({ type: FETCHSTATS_SUCCESS, payload: convertData(res.data) })
    )
    .catch(err => dispatch({ type: FETCHSTATS_FAILURE, payload: err }));
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

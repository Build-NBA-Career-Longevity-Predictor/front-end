import {
  START_FETCHPLAYERSLIST,
  FETCHPLAYERSLIST_FAILURE,
  FETCHPLAYERSLIST_SUCCESS,
  START_FETCHPLAYER,
  FETCHPLAYER_FAILURE,
  FETCHPLAYER_SUCCESS,
  START_FETCHSTATS,
  FETCHSTATS_FAILURE,
  FETCHSTATS_SUCCESS
} from "../Actions/playersActions";

const initialState = {
  playerList: [],
  currentPlayer: null,
  isFetchingList: false,
  errorFetchList: null,
  isFetchingPlayer: false,
  errorFetchPlayer: null,
  isFetchingStats: false,
  errorFetchStats: null
};

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHPLAYERSLIST:
      return { ...state, errorFetchList: null, isFetchingList: true };
    case FETCHPLAYERSLIST_SUCCESS:
      return { ...state, playerList: action.payload, isFetchingList: false };
    case FETCHPLAYERSLIST_FAILURE:
      return {
        ...state,
        errorFetchList: action.payload,
        isFetchingList: false
      };

    case START_FETCHSTATS:
      return { ...state, errorFetchStats: null, isFetchingStats: true };
    case FETCHSTATS_SUCCESS:
      return {
        ...state,
        isFetchingStats: false,
        currentPlayer: action.payload
      };
    case FETCHSTATS_FAILURE:
      return {
        ...state,
        isFetchingStats: false,
        errorFetchStats: action.payload
      };

    case START_FETCHPLAYER:
      return { ...state, errorFetchPlayer: null, isFetchingPlayer: true };
    case FETCHPLAYER_SUCCESS:
      return {
        ...state,
        currentPlayer: action.payload,
        isFetchingPlayer: false
      };
    case FETCHPLAYER_FAILURE:
      return {
        ...state,
        isFetchingPlayer: false,
        errorFetchPlayer: action.payload
      };

    default:
      return state;
  }
};

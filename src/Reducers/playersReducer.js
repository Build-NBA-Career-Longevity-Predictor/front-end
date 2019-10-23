import {
  START_FETCHPLAYERSLIST,
  FETCHPLAYERSLIST_FAILURE,
  FETCHPLAYERSLIST_SUCCESS,
  START_FETCHPLAYER,
  FETCHPLAYER_FAILURE,
  FETCHPLAYER_SUCCESS
} from "../Actions/playersActions";
import {
  FETCHPLAYERS_SUCCESS,
  FETCHPLAYERS_FAILURE
} from "../Actions/userActions";

const initialState = {
  playerList: [],
  currentPlayer: {},
  isFetchingList: false,
  errorFetchList: null,
  isFetchingPlayer: false,
  errorFetchPlayer: null
};

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHPLAYERSLIST:
      return { ...state, errorFetchList: null, isFetchingList: true };
    case FETCHPLAYERS_SUCCESS:
      return { ...state, playerList: action.payload, isFetchingList: false };
    case FETCHPLAYERS_FAILURE:
      return {
        ...state,
        errorFetchList: action.payload,
        isFetchingList: false
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

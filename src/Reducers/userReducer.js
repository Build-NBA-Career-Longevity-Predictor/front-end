import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  START_LOGIN,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  START_LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  START_REGISTER,
  FETCHPLAYERS_FAILURE,
  FETCHPLAYERS_SUCCESS,
  START_FETCHPLAYERS,
  DELETEPLAYER_FAILURE,
  DELETEPLAYER_SUCCESS,
  START_DELETEPLAYER
} from "../Actions/userActions";

const initialState = {
  isLogging: false,
  isLoggingOut: false,
  isRegistering: false,
  isFetching: false,
  isDeleting: false,
  errorLogin: null,
  errorLogout: null,
  errorRegister: null,
  errorDeleting: null,
  errorFetching: null,
  savedPlayers: [],
  userLogged: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, errorLogin: null, isLogging: true };
    case LOGIN_SUCCESS:
      return { ...state, isLogging: false, userLogged: true };
    case LOGIN_FAILURE:
      return { ...state, errorLogin: action.payload, isLogging: false };

    case START_LOGOUT:
      return { ...state, errorLogout: null, isLoggingout: true };
    case LOGOUT_SUCCESS:
      return { ...state, isLoggingout: false, userLogged: false };
    case LOGOUT_FAILURE:
      return { ...state, errorLogout: action.payload, isLoggingout: false };

    case START_REGISTER:
      return { ...state, errorRegister: null, isRegistering: true };
    case REGISTER_SUCCESS:
      return { ...state, isRegistering: false, userLogged: true };
    case REGISTER_FAILURE:
      return { ...state, errorRegister: action.payload, isRegistering: false };

    case START_FETCHPLAYERS:
      return { ...state, errorFetching: null, isFetching: true };
    case FETCHPLAYERS_SUCCESS:
      return { ...state, isFetching: false, savedPlayers: action.payload };
    case FETCHPLAYERS_FAILURE:
      return { ...state, errorFetching: action.payload, isFetching: false };

    case START_DELETEPLAYER:
      return { ...state, errorDeleting: null, isDeleting: true };
    case DELETEPLAYER_SUCCESS:
      return { ...state, isDeleting: false, savedPlayers: action.payload };
    case DELETEPLAYER_FAILURE:
      return { ...state, errorDeleting: action.payload, isDeleting: false };

    default:
      return state;
  }
};

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
  START_DELETEPLAYER,
  START_SAVEPLAYER,
  SAVEPLAYER_FAILURE,
  SAVEPLAYER_SUCCESS,
  START_EDITPLAYER,
  EDITPLAYER_FAILURE,
  EDITPLAYER_SUCCESS
} from "../Actions/userActions";

const initialState = {
  isLogging: false,
  isEditing: false,
  isLoggingOut: false,
  isRegistering: false,
  isFetching: false,
  isDeleting: false,
  isSaving: false,
  errorLogin: null,
  errorLogout: null,
  errorRegister: null,
  errorDeleting: null,
  errorFetching: null,
  errorEditing: null,
  errorSaving: null,
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

    case START_SAVEPLAYER:
      return { ...state, errorSaving: null, isSaving: true };
    case SAVEPLAYER_SUCCESS:
      return { ...state, isSaving: false, savedPlayers: action.payload };
    case SAVEPLAYER_FAILURE:
      return { ...state, errorSaving: action.payload, isSaving: false };

    case START_EDITPLAYER:
      return { ...state, isEditing: true, errorEditing: null };
    case EDITPLAYER_SUCCESS:
      return { ...state, isEditing: false, savedPlayers: action.payload };
    case EDITPLAYER_FAILURE:
      return { ...state, isEditing: false, errorEditing: action.payload };

    default:
      return state;
  }
};

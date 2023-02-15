import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "./auth.types";

let initialState = {
  loading: false,
  error: false,
  isLoggedIn: false,
  token: "",
  first_name: "",
  last_name: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_LOADING: {
      return { ...state, loading: true };
    }
    case AUTH_LOGIN_ERROR: {
      return { ...state, loading: false, error: true,isLoggedIn:false, token: "",
  first_name: "",
  last_name: "", };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        isLoggedIn: true,
        token: payload.token,
        first_name:payload.first_name,
        last_name:payload.last_name
      };
    }
    case AUTH_LOGOUT: {
      return {
        loading: false,
        error: false,
        isLoggedIn: false,
        token: "",
        first_name: "",
        last_name: "",
      };
    }
    default: {
      return state;
    }
  }
};

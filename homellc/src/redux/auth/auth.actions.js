import { loginAPI } from "./auth.api"
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./auth.types"

export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let data = await loginAPI(creds);
    if (data.token) {
      dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data });
    } else {
      dispatch({ type: AUTH_LOGIN_ERROR });
    }
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const logout=()=>(dispatch)=>{
    dispatch({type:AUTH_LOGOUT})
}
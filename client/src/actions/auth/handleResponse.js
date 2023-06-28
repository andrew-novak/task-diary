import { AUTH_SUCCESS, AUTH_FAILURE } from "../../constants/actionTypes";
import history from "../../history";

export default (res) => (dispatch) => {
  const { message, idToken } = res.data;

  if (message === "success") {
    localStorage.setItem("idToken", idToken);
    dispatch({ type: AUTH_SUCCESS });
    return history.push("/");
  }

  return dispatch({ type: AUTH_FAILURE, error: message });
};

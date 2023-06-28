import { AUTH_SUCCESS, AUTH_FAILURE } from "../../constants/actionTypes";
import history from "../../history";

const handleResponse = (res) => (dispatch) => {
  const { message, idToken } = res.data;

  const baseUrl = process.env.PUBLIC_URL;

  if (message === "success") {
    localStorage.setItem("idToken", idToken);
    dispatch({ type: AUTH_SUCCESS });
    return history.push(`${baseUrl}/`);
  }

  return dispatch({ type: AUTH_FAILURE, error: message });
};

export default handleResponse;

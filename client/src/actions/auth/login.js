import axios from "axios";

import { AUTH_START, AUTH_FAILURE } from "../../constants/actionTypes";
import { API_URL } from "../../constants/urls";
import handleResponse from "./handleResponse";

const login = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_START });

  if (!email || !password)
    return dispatch({ type: AUTH_FAILURE, error: "Enter credentials" });

  return axios({
    method: "POST",
    url: `${API_URL}/auth/login`,
    data: { email, password },
  }).then((res) => dispatch(handleResponse(res)));
};

export default login;

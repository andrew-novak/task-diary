import { RESET_STATES } from "../constants/actionTypes";

const logout = () => (dispatch) => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("pageDate");
  return dispatch({ type: RESET_STATES });
};

export default logout;

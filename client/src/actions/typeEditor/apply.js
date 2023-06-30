import axios from "axios";

import {
  TYPE_EDITOR_APPLY_START,
  TYPE_EDITOR_APPLY_SUCCESS,
  TYPE_EDITOR_APPLY_FAILURE,
} from "../../constants/actionTypes";
import { API_URL } from "../../constants/urls";
import handleResponse from "../handleResponse";

const applyType = (setType) => (dispatch) => {
  dispatch({ type: TYPE_EDITOR_APPLY_START });
  const { name, colorId } = setType;

  const error = (() => {
    if (!name) return "Enter a name";
    if (!colorId) return "Pick a color";
    return null;
  })();
  if (error) return dispatch({ type: TYPE_EDITOR_APPLY_FAILURE, error: error });

  const idToken = localStorage.getItem("idToken");
  const pageDate = localStorage.getItem("pageDate");

  return axios({
    method: "POST",
    url: `${API_URL}/private/set-type`,
    headers: { Authorization: `Bearer ${idToken}` },
    data: { setType, pageDate },
  }).then((res) =>
    dispatch(
      handleResponse(res, TYPE_EDITOR_APPLY_SUCCESS, TYPE_EDITOR_APPLY_FAILURE)
    )
  );
};

export default applyType;

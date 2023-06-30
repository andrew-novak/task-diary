import axios from "axios";

import {
  TYPE_EDITOR_DELETE_START,
  TYPE_EDITOR_DELETE_SUCCESS,
  TYPE_EDITOR_DELETE_FAILURE,
} from "../../constants/actionTypes";
import { API_URL } from "../../constants/urls";
import handleResponse from "../handleResponse";

const deleteType = (deleteTypeId) => (dispatch) => {
  dispatch({ type: TYPE_EDITOR_DELETE_START });

  if (!deleteTypeId)
    return dispatch({
      type: TYPE_EDITOR_DELETE_FAILURE,
      error: "No task type id provided",
    });

  const idToken = localStorage.getItem("idToken");
  const pageDate = localStorage.getItem("pageDate");

  return axios({
    method: "POST",
    url: `${API_URL}/private/delete-type`,
    headers: { Authorization: `Bearer ${idToken}` },
    data: { deleteTypeId, pageDate },
  }).then((res) =>
    dispatch(
      handleResponse(
        res,
        TYPE_EDITOR_DELETE_SUCCESS,
        TYPE_EDITOR_DELETE_FAILURE
      )
    )
  );
};

export default deleteType;

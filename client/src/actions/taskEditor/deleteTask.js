import axios from "axios";

import {
  TASK_EDITOR_DELETE_START,
  TASK_EDITOR_DELETE_SUCCESS,
  TASK_EDITOR_DELETE_FAILURE,
} from "../../constants/actionTypes";
import { API_URL } from "../../constants/urls";
import handleResponse from "../handleResponse";

const success = TASK_EDITOR_DELETE_SUCCESS;
const failure = TASK_EDITOR_DELETE_FAILURE;

const deleteTask = (deleteTaskId) => (dispatch) => {
  dispatch({ type: TASK_EDITOR_DELETE_START });

  if (!deleteTaskId)
    return dispatch({
      type: TASK_EDITOR_DELETE_FAILURE,
      error: "No task id provided",
    });

  const idToken = localStorage.getItem("idToken");
  const pageDate = localStorage.getItem("pageDate");

  return axios({
    method: "POST",
    url: `${API_URL}/private/delete-task`,
    headers: { Authorization: `Bearer ${idToken}` },
    data: { deleteTaskId, pageDate },
  }).then((res) => dispatch(handleResponse(res, success, failure)));
};

export default deleteTask;

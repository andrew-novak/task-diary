import axios from "axios";

import { GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../constants/actionTypes";
import { API_URL } from "../constants/urls";
import handleResponse from "./handleResponse";

function getPageDate(option, dateObj) {
  const pageDate = localStorage.getItem("pageDate");
  if (option) {
    const date = new Date(pageDate);
    if (option === "next") return date.setDate(date.getDate() + 1);
    if (option === "previous") return date.setDate(date.getDate() - 1);
    if (option === "pass-date") return dateObj;
  }
  if (!pageDate) return new Date().setHours(0, 0, 0, 0);
  return pageDate;
}

const getData = (option, dateObj) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  const idToken = localStorage.getItem("idToken");
  const pageDate = getPageDate(option, dateObj);
  return axios({
    method: "POST",
    url: `${API_URL}/private/get-data`,
    headers: { Authorization: `Bearer ${idToken}` },
    data: { pageDate },
  }).then((res) => dispatch(handleResponse(res, GET_DATA_SUCCESS)));
};

export default getData;

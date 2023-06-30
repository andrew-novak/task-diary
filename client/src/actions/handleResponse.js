import history from "../history";

const handleResponse = (res, SUCCESS_TYPE, FAILURE_TYPE) => (dispatch) => {
  const { message, colors, types, pageDate, pageTasks } = res.data;

  if (message === "success") {
    localStorage.setItem("pageDate", pageDate);
    return dispatch({ type: SUCCESS_TYPE, colors, types, pageDate, pageTasks });
  }

  if (message === "invalid-id-token") return history.push("/error-auth");

  console.log("response.data.message:", res.data?.message);
  if (!FAILURE_TYPE) return history.push("/error-general");

  return dispatch({ type: FAILURE_TYPE, error: message });
};

export default handleResponse;

import history from "../history";

const handleResponse = (res, success, failure) => (dispatch) => {
  const { message, colors, types, pageDate, pageTasks } = res.data;

  if (message === "success") {
    localStorage.setItem("pageDate", pageDate);
    return dispatch({ type: success, colors, types, pageDate, pageTasks });
  }

  const baseUrl = process.env.PUBLIC_URL;

  if (message === "invalid-id-token")
    return history.push(`${baseUrl}/error-auth`);

  if (!failure) return history.push(`${baseUrl}/error-general`);

  return dispatch({ type: failure, error: message });
};

export default handleResponse;

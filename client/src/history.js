import { createBrowserHistory } from "history";
import { BASE_URL } from "./constants/urls";

const history = createBrowserHistory({
  basename: BASE_URL,
});

export default history;

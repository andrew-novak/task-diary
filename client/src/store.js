import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const NODE_ENV = process.env.NODE_ENV;

const initialState = {};

const logger = createLogger({});

// Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions.
const middleware = [thunk, ...(NODE_ENV !== "production" ? { logger } : {})];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

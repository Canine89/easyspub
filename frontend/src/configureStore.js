import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

// import reducers...
import user from "./reducers/userReducer";

const env = process.env.NODE_ENV;
const history = createBrowserHistory();
const middlewares = [thunk];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger); // 항상 마지막에 푸시해야 함
}

const reducer = (history) =>
  combineReducers({ user, router: connectRouter(history) });

let store = (initialState) =>
  createStore(
    reducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), ...middlewares)
    )
  );

export { history };

export default store();

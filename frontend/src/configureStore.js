import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

// import reducers
import user from "./reducers/userReducer";

// make history object
const history = createBrowserHistory();

// setting middlewares
const middlewares = [thunk];

// setting logger when env.NODE_ENV is "development"
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger); // 항상 마지막에 푸시해야 함
}

// combine reduer
const reducer = (history) =>
  combineReducers({ user, router: connectRouter(history) });

// make store
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

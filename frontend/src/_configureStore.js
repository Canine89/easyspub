import { createStore, combineReducers, applyMiddelware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./_reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(),
    applyMiddelware(...middleware)
  );

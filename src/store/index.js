import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducer";

import thunk from "redux-thunk";

//Redux Devtools配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

//将Redux Devtools和redux-thunk合并
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
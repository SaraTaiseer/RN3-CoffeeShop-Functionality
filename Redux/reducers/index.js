import { combineReducers } from "redux";

import listReducer from "./item";

const rootReducer = combineReducers({
  listState: listReducer,
});

export default rootReducer;

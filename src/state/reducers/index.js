import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
  accountBalance: accountReducer,
});

export default reducers;

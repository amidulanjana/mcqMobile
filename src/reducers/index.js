import { combineReducers } from "redux";
import authReducer from "./authReducer";
import papersReducer from "./papersReducer";

export default combineReducers({
  auth: authReducer,
  papers: papersReducer
  // banana: () => []
});

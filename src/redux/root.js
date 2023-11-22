import { combineReducers } from "@reduxjs/toolkit";
import seasonReducer from "./reducers/season.store";
import studentReducer from "./reducers/student.store";
import newsReducer from "./reducers/news.store";
import authReducer from "./reducers/auth.store";

export const rootReducer = combineReducers({
  season: seasonReducer,
  student: studentReducer,
  news: newsReducer,
  auth: authReducer
});

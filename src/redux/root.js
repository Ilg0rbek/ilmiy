import { combineReducers } from "@reduxjs/toolkit";
import seasonReducer from "./reducers/season.store";
import studentReducer from "./reducers/student.store";
import newsReducer from "./reducers/news.store";

export const rootReducer = combineReducers({
  season: seasonReducer,
  student: studentReducer,
  news: newsReducer,
});

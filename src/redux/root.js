import { combineReducers } from "@reduxjs/toolkit";
import seasonReducer from "./reducers/season.store";
import profileReducer from "./reducers/profile.store";
import newsReducer from "./reducers/news.store";
import authReducer from "./reducers/auth.store";

export const rootReducer = combineReducers({
  season: seasonReducer,
  profile: profileReducer,
  news: newsReducer,
  auth: authReducer
});

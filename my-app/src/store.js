import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./swapiReducer";

const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
});
export default store;

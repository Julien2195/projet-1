import { configureStore } from "@reduxjs/toolkit";
import searchState from "./features/searchState";

export default configureStore({
  reducer: {
    search: searchState,
  },
});

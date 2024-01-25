import { configureStore } from "@reduxjs/toolkit";

import todoReducers from "../slices/TodoSlice";
const store = configureStore({
  reducer: {
    todoReducers: todoReducers,
  },
});

export default store;

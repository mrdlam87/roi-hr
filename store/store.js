import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees.slice";

export const store = configureStore({
  reducer: {
    employeesSlice: employeeReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  employees: [],
  selectedEmployee: null,
  showEmployeeDetail: false,
  searchString: "",
};

const employeesSlice = createSlice({
  name: "employeesSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    setSearchString(state, action) {
      state.searchString = action.payload;
    },
    setSelectedEmployee(state, action) {
      state.selectedEmployee = action.payload;
    },
    setShowEmployeeDetail(state, action) {
      state.showEmployeeDetail = action.payload;
    },
  },
});

export const {
  setEmployees,
  setSearchString,
  setSelectedEmployee,
  setShowEmployeeDetail,
} = employeesSlice.actions;

export default employeesSlice.reducer;

import { Departments } from "../constants/departments";

export const selectEmployees = (state) => state.employeesSlice.employees;

export const selectSearchString = (state) => state.employeesSlice.searchString;

export const selectSelectedEmployee = (state) =>
  state.employeesSlice.selectedEmployee;

export const selectShowEmployeeDetail = (state) =>
  state.employeesSlice.showEmployeeDetail;

export const selectSearchedEmployees = (state) =>
  state.employeesSlice.employees.filter((employee) =>
    employee.name
      .toLowerCase()
      .includes(state.employeesSlice.searchString.toLowerCase())
  );

export const selectSearchedDepartments = (state) =>
  Departments.filter((department) =>
    department.name
      .toLowerCase()
      .includes(state.employeesSlice.searchString.toLowerCase())
  );

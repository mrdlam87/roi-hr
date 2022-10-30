import { createContext, useEffect, useState, useReducer } from "react";
import { Departments } from "../constants/departments";
import { Letters } from "../constants/general";

const INITIAL_STATE = {
  employees: [],
  selectedEmployee: null,
  showEmployeeDetail: false,
  searchString: "",
};

const ACTION_TYPES = {
  SET_EMPLOYEES: "SET_EMPLOYEES",
  SET_SELECTED_EMPLOYEES: "SET_SELECTED_EMPLOYEES",
  SET_SHOW_EMPLOYEE_DETAIL: "",
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
};

const employeesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
      };
    case ACTION_TYPES.SET_SELECTED_EMPLOYEES:
      return {
        ...state,
        selectedEmployee: payload,
      };
    case ACTION_TYPES.SET_SHOW_EMPLOYEE_DETAIL:
      return {
        ...state,
        showEmployeeDetail: payload,
      };
    case ACTION_TYPES.SET_SEARCH_STRING:
      return {
        ...state,
        searchString: payload,
      };
    default:
      return state;
  }
};

export const EmployeeContext = createContext({
  employees: [],
  selectedEmployee: null,
  setSelectedEmployee: () => {},
  showEmployeeDetail: false,
  setShowEmployeeDetail: () => {},
  searchString: "",
  setSearchString: () => {},
  searchedEmployees: [],
  setSearchedEmployees: () => {},
  searchedDepartments: Departments,
  setSearchedDepartments: () => {},
  availableDepartments: [],
  availableLetters: [],
});

export const EmployeeProvider = ({ children }) => {
  const [
    { employees, selectedEmployee, showEmployeeDetail, searchString },
    dispatch,
  ] = useReducer(employeesReducer, INITIAL_STATE);

  const searchedEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const searchedDepartments = Departments.filter((department) =>
    department.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const availableDepartments = searchedDepartments.filter((department) =>
    employees.some((employee) => employee.department === department.id)
  );

  const availableLetters = Letters.filter((letter) =>
    searchedEmployees.some((employee) => employee.name.startsWith(letter))
  );

  const setSelectedEmployee = (value) =>
    dispatch({ type: ACTION_TYPES.SET_SELECTED_EMPLOYEES, payload: value });

  const setShowEmployeeDetail = (value) =>
    dispatch({ type: ACTION_TYPES.SET_SHOW_EMPLOYEE_DETAIL, payload: value });

  const setSearchString = (value) =>
    dispatch({ type: ACTION_TYPES.SET_SEARCH_STRING, payload: value });

  useEffect(() => {
    fetch("https://mrdlam87.github.io/roi-hr-api/employees.json")
      .then((response) => response.json())
      .then((employees) =>
        dispatch({ type: ACTION_TYPES.SET_EMPLOYEES, payload: employees })
      );
  }, []);

  const value = {
    employees,
    showEmployeeDetail,
    setShowEmployeeDetail,
    selectedEmployee,
    setSelectedEmployee,
    searchString,
    setSearchString,
    searchedEmployees,
    searchedDepartments,
    availableDepartments,
    availableLetters,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

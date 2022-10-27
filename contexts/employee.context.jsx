import { createContext, useEffect, useState } from "react";
import { Departments } from "../constants/departments";
import { Employees } from "../constants/employees";
import { Letters } from "../constants/general";

export const EmployeeContext = createContext({
  selectedEmployee: null,
  setSelectedEmployee: () => {},
  showEmployeeDetail: false,
  setShowEmployeeDetail: () => {},
  searchString: "",
  setSearchString: () => {},
  searchedEmployees: Employees,
  setSearchedEmployees: () => {},
  searchedDepartments: Departments,
  setSearchedDepartments: () => {},
  availableDepartments: [],
  availableLetters: [],
});

export const EmployeeProvider = ({ children }) => {
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchedEmployees, setSearchedEmployees] = useState(Employees);
  const [searchedDepartments, setSearchedDepartments] = useState(Departments);

  const availableDepartments = searchedDepartments.filter(
    (department) =>
      Employees.filter((employee) => employee.department === department.id)
        .length > 0
  );

  const availableLetters = Letters.filter(
    (letter) =>
      searchedEmployees.filter((employee) => employee.name.startsWith(letter))
        .length > 0
  );

  useEffect(() => {
    const filteredEmployees = Employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchString.toLowerCase())
    );
    const filteredDepartments = Departments.filter((department) =>
      department.name.toLowerCase().includes(searchString.toLowerCase())
    );

    setSearchedEmployees(filteredEmployees);
    setSearchedDepartments(filteredDepartments);
  }, [searchString]);

  const value = {
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

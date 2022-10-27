import { createContext, useEffect, useState } from "react";
import { Departments } from "../constants/departments";
import { Employees } from "../constants/employees";

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
});

export const EmployeeProvider = ({ children }) => {
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchedEmployees, setSearchedEmployees] = useState(Employees);
  const [searchedDepartments, setSearchedDepartments] = useState(Departments);

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
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import { Employees } from "../constants/employees";

export const EmployeeContext = createContext({
  selectedEmployee: null,
  setSelectedEmployee: () => {},
  showEmployeeDetail: false,
  setShowEmployeeDetail: () => {},
  searchString: "",
  setSearchString: () => {},
  searchedEmployess: Employees,
  setSearchedEmployess: () => {},
});

export const EmployeeProvider = ({ children }) => {
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchedEmployess, setSearchedEmployess] = useState(Employees);

  useEffect(() => {
    const filteredEmployees = Employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setSearchedEmployess(filteredEmployees);
  }, [searchString]);

  const value = {
    showEmployeeDetail,
    setShowEmployeeDetail,
    selectedEmployee,
    setSelectedEmployee,
    searchString,
    setSearchString,
    searchedEmployess,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

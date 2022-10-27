import { createContext, useEffect, useState } from "react";
import { Employess } from "../constants/employess";

export const EmployeeContext = createContext({
  selectedEmployee: null,
  setSelectedEmployee: () => {},
  showEmployeeDetail: false,
  setShowEmployeeDetail: () => {},
  searchString: "",
  setSearchString: () => {},
  searchedEmployess: Employess,
  setSearchedEmployess: () => {},
});

export const EmployeeProvider = ({ children }) => {
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchedEmployess, setSearchedEmployess] = useState(Employess);

  useEffect(() => {
    const filteredEmployees = Employess.filter((employee) =>
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

import { createContext, useEffect, useState } from "react";
import { Departments } from "../constants/departments";
import { Letters } from "../constants/general";

export const EmployeeContext = createContext({
  employees: [],
  addEmployee: () => {},
  updateEmployee: () => {},
  selectedEmployee: null,
  setSelectedEmployee: () => {},
  showEmployeeDetail: false,
  setShowEmployeeDetail: () => {},
  showAddEmployee: false,
  setShowAddEmployee: () => {},
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
  const [employees, setEmployees] = useState([]);
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [searchedDepartments, setSearchedDepartments] = useState(Departments);

  const availableDepartments = searchedDepartments.filter((department) =>
    employees.some((employee) => employee.department === department.id)
  );

  const availableLetters = Letters.filter((letter) =>
    searchedEmployees.some((employee) => employee.name.startsWith(letter))
  );

  const addEmployee = (employee) => setEmployees([...employees, employee]);

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployeeIndex = employees.findIndex(
      (employee) => employee.id === selectedEmployee.id
    );

    employees[updatedEmployeeIndex] = updatedEmployee;
    setEmployees([...employees]);
  };

  useEffect(() => {
    fetch("https://mrdlam87.github.io/roi-hr-api/employees.json")
      .then((response) => response.json())
      .then((employees) => setEmployees(employees));
  }, []);

  useEffect(() => {
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchString.toLowerCase())
    );
    const filteredDepartments = Departments.filter((department) =>
      department.name.toLowerCase().includes(searchString.toLowerCase())
    );

    setSearchedEmployees(filteredEmployees);
    setSearchedDepartments(filteredDepartments);
  }, [employees, searchString]);

  const value = {
    employees,
    addEmployee,
    updateEmployee,
    showEmployeeDetail,
    setShowEmployeeDetail,
    showAddEmployee,
    setShowAddEmployee,
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

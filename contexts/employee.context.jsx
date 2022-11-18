import { createContext, useEffect, useState } from "react";
import { Departments } from "../constants/departments";
import { Letters } from "../constants/general";
import { getEmployees } from "../utils/firebase";

export const EmployeeContext = createContext({
  employees: [],
  addEmployee: () => {},
  updateEmployee: () => {},
  deleteEmployee: () => {},
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

/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children children inside provider container
 * @returns {JSX.Element} provider container to access employee context
 */
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [searchedDepartments, setSearchedDepartments] = useState(Departments);

  //remove departments that do not have any employees assigned
  const availableDepartments = searchedDepartments.filter((department) =>
    employees.some((employee) => employee.department === department.id)
  );

  //remove letters that do not have any employees assigned
  const availableLetters = Letters.filter((letter) =>
    searchedEmployees.some((employee) => employee.name.startsWith(letter))
  );

  const addEmployee = async (employee) =>
    setEmployees([...employees, employee]);

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployeeIndex = employees.findIndex(
      (employee) => employee.id === selectedEmployee.id
    );

    employees[updatedEmployeeIndex] = updatedEmployee;
    setEmployees([...employees]);
  };

  //remove selected employee
  const deleteEmployee = () => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== selectedEmployee.id
    );
    setEmployees(updatedEmployees);
  };

  //fetch employee data on load
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesDb = await getEmployees();
        setEmployees(employeesDb);
      } catch (error) {}
    };

    fetchEmployees();
  }, []);

  //update filtered arrays when search string changes
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
    deleteEmployee,
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

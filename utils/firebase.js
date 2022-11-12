import axios from "axios";

const BACKEND_URL =
  "https://roi-hr-default-rtdb.asia-southeast1.firebasedatabase.app";

export const postEmployee = async (employeeData) => {
  const response = await axios.post(
    BACKEND_URL + `/employees.json`,
    employeeData
  );

  // returns the Firebase key identifier
  return response.data.name;
};

export const getEmployees = async () => {
  const response = await axios.get(BACKEND_URL + `/employees.json`);
  const employees = [];

  for (const key in response.data) {
    const employee = {
      key,
      id: response.data[key].id,
      name: response.data[key].name,
      phone: response.data[key].phone,
      department: response.data[key].department,
      addressStreet: response.data[key].addressStreet,
      addressCity: response.data[key].addressCity,
      addressState: response.data[key].addressState,
      addressZip: response.data[key].addressZip,
      addressCountry: response.data[key].addressCountry,
    };

    employees.push(employee);
  }

  return employees;
};

export const putEmployee = (key, employeeData) =>
  axios.put(BACKEND_URL + `/employees/${key}.json`, employeeData);

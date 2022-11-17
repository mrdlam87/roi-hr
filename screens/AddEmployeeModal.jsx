import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/employee.context";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import DepartmentPicker from "../components/ui/DepartmentPicker";
import StatePicker from "../components/ui/StatePicker";
import { delEmployee, postEmployee, putEmployee } from "../utils/firebase";
import IconButton from "../components/ui/IconButton";

const INITIAL_STATUS = {
  id: true,
  name: true,
  phone: true,
  department: true,
  addressStreet: true,
  addressCity: true,
  addressState: true,
  addressZip: true,
};

const AddEmployeeModal = () => {
  const {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    showAddEmployee,
    setShowAddEmployee,
    selectedEmployee,
    setSelectedEmployee,
  } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({});
  const [formDataStatus, setFormDataStatus] = useState(INITIAL_STATUS);

  const inputChangedHandler = (identifier, value) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [identifier]: value,
      };
    });
    setFormDataStatus((currentData) => {
      return {
        ...currentData,
        [identifier]: true,
      };
    });
  };

  const modalClose = () => {
    setShowAddEmployee(false);
    setSelectedEmployee(null);
    setFormData({});
    setFormDataStatus(INITIAL_STATUS);
  };

  const modalShowHandler = async () => {
    setFormData({
      id: selectedEmployee ? selectedEmployee.id.toString() : "",
      name: selectedEmployee ? selectedEmployee.name : "",
      phone: selectedEmployee ? selectedEmployee.phone : "",
      department: selectedEmployee ? selectedEmployee.department : -1,
      addressStreet: selectedEmployee ? selectedEmployee.addressStreet : "",
      addressCity: selectedEmployee ? selectedEmployee.addressCity : "",
      addressState: selectedEmployee ? selectedEmployee.addressState : -1,
      addressZip: selectedEmployee ? selectedEmployee.addressZip : "",
    });
  };

  const submitHandler = async () => {
    const employeeData = {
      ...formData,
      id: +formData.id,
      addressCountry: "Australia",
    };

    // Check id is a valid number and not already existing
    const idValid =
      !isNaN(employeeData.id) &&
      employeeData.id > 0 &&
      (!employees.some((employee) => employee.id === employeeData.id) ||
        employeeData.id === selectedEmployee?.id);

    const dataStatus = {
      id: idValid,
      name: employeeData.name.trim().length > 0,
      phone: employeeData.phone.trim().length > 0,
      department: employeeData.department >= 0,
      addressStreet: employeeData.addressStreet.trim().length > 0,
      addressCity: employeeData.addressCity.trim().length > 0,
      addressState: employeeData.addressState !== -1,
      addressZip: employeeData.addressZip.trim().length > 0,
    };

    setFormDataStatus(dataStatus);
    if (!Object.values(dataStatus).every((status) => status)) return;

    if (selectedEmployee) {
      await putEmployee(selectedEmployee.key, employeeData);
      updateEmployee({ ...employeeData, key: selectedEmployee.key });
    } else {
      const key = await postEmployee(employeeData);
      addEmployee({ ...employeeData, key });
    }
    modalClose();
  };

  const deleteHandler = async () => {
    await delEmployee(selectedEmployee.key);
    deleteEmployee();
    modalClose();
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={showAddEmployee}
      backdropTransitionOutTiming={0}
      onBackdropPress={modalClose}
      backdropColor="#1a1a1a"
      backdropOpacity={0.7}
      onModalWillShow={modalShowHandler}
    >
      <View style={styles.card}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {selectedEmployee ? "UPDATE" : "ADD"} EMPLOYEE
            </Text>
            {selectedEmployee && (
              <IconButton
                iconName="trash"
                size={30}
                color={GlobalStyles.colors.primaryRed}
                onPress={deleteHandler}
              />
            )}
          </View>
          <View style={styles.form}>
            <View style={styles.row}>
              <Input
                label="Employee ID"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "id")}
                value={formData.id}
                valid={formDataStatus.id}
              />
              <Input
                label="Phone"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "phone")}
                value={formData.phone}
                valid={formDataStatus.phone}
              />
            </View>
            <DepartmentPicker
              selectedValue={formData.department}
              onValueChange={inputChangedHandler.bind(this, "department")}
              valid={formDataStatus.department}
            />
            <Input
              label="Full Name"
              style={styles.rowInput}
              onChangeText={inputChangedHandler.bind(this, "name")}
              value={formData.name}
              valid={formDataStatus.name}
            />
            <View style={styles.row}>
              <Input
                label="Street"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "addressStreet")}
                value={formData.addressStreet}
                valid={formDataStatus.addressStreet}
              />
              <Input
                label="City"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "addressCity")}
                value={formData.addressCity}
                valid={formDataStatus.addressCity}
              />
            </View>
            <View style={styles.row}>
              <Input
                label="Postcode"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "addressZip")}
                value={formData.addressZip}
                valid={formDataStatus.addressZip}
              />
              <StatePicker
                style={styles.rowInput}
                selectedValue={formData.addressState}
                onValueChange={inputChangedHandler.bind(this, "addressState")}
                valid={formDataStatus.addressState}
              />
            </View>
          </View>
        </ScrollView>
        <View style={[styles.row, styles.buttonRow]}>
          <Button style={styles.button} onPress={modalClose} mode="flat">
            CANCEL
          </Button>
          <Button style={styles.button} onPress={submitHandler}>
            {selectedEmployee ? "UPDATE" : "ADD"}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default AddEmployeeModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  card: {
    height: "75%",
    width: "100%",
    padding: 15,
    elevation: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primaryDark,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  rowInput: { flex: 1 },
  form: {
    flex: 1,
  },
  pickerContainer: {
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    borderRadius: GlobalStyles.borderRadius,
    height: 40,
    marginHorizontal: 8,
    justifyContent: "center",
  },
  buttonRow: {
    marginTop: 8,
    width: "70%",
    alignSelf: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});

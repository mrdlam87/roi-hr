import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/employee.context";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import DepartmentPicker from "../components/ui/DepartmentPicker";
import StatePicker from "../components/ui/StatePicker";

const AddEmployeeModal = () => {
  const {
    addEmployee,
    updateEmployee,
    showAddEmployee,
    setShowAddEmployee,
    selectedEmployee,
    setSelectedEmployee,
  } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({});

  const inputChangedHandler = (identifier, value) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [identifier]: value,
      };
    });
  };

  const modalClose = () => {
    setShowAddEmployee(false);
    setSelectedEmployee(null);
    setFormData({});
  };

  const modalShowHandler = () => {
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

  const submitHandler = () => {
    const employeeData = {
      ...formData,
      id: +formData.id,
      addressCountry: "Australia",
    };

    selectedEmployee ? updateEmployee(employeeData) : addEmployee(employeeData);
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
          <Text style={styles.title}>
            {selectedEmployee ? "UPDATE" : "ADD"} EMPLOYEE
          </Text>
          <View style={styles.form}>
            <View style={styles.row}>
              <Input
                label="Employee ID"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "id")}
                value={formData.id}
              />
              <Input
                label="Phone"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "phone")}
                value={formData.phone}
              />
            </View>
            <DepartmentPicker
              selectedValue={formData.department}
              onValueChange={inputChangedHandler.bind(this, "department")}
            />
            <Input
              label="Full Name"
              style={styles.rowInput}
              onChangeText={inputChangedHandler.bind(this, "name")}
              value={formData.name}
            />
            <View style={styles.row}>
              <Input
                label="Street"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "addressStreet")}
                value={formData.addressStreet}
              />
              <Input
                label="City"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "addressCity")}
                value={formData.addressCity}
              />
            </View>
            <View style={styles.row}>
              <Input
                label="Postcode"
                style={styles.rowInput}
                onChangeText={inputChangedHandler.bind(this, "addressZip")}
                value={formData.addressZip}
              />
              <StatePicker
                style={styles.rowInput}
                selectedValue={formData.addressState}
                onValueChange={inputChangedHandler.bind(this, "addressState")}
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primaryDark,
    marginBottom: 20,
    marginLeft: 8,
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

import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/employee.context";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import DepartmentPicker from "../components/ui/DepartmentPicker";
import StatePicker from "../components/ui/StatePicker";

const AddEmployeeModal = () => {
  const { showAddEmployee, setShowAddEmployee } = useContext(EmployeeContext);
  const [department, setDepartment] = useState();
  const [addressState, setAddressState] = useState();

  const clickHandler = () => setShowAddEmployee(false);

  return (
    <Modal
      style={styles.modal}
      isVisible={showAddEmployee}
      backdropTransitionOutTiming={0}
      onBackdropPress={clickHandler}
    >
      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.title}>ADD EMPLOYEE</Text>
          <View style={styles.form}>
            <DepartmentPicker
              selectedValue={department}
              onValueChange={(value) => setDepartment(value)}
            />
            <View style={styles.row}>
              <Input label="Employee ID" style={styles.rowInput} />
              <Input label="Phone" style={styles.rowInput} />
            </View>
            <View style={styles.row}>
              <Input label="First Name" style={styles.rowInput} />
              <Input label="Last Name" style={styles.rowInput} />
            </View>
            <Input label="Street" />
            <Input label="City" />
            <View style={styles.row}>
              <Input label="Postcode" style={styles.rowInput} />
              <StatePicker
                style={styles.rowInput}
                selectedValue={addressState}
                onValueChange={(value) => setAddressState(value)}
              />
            </View>
          </View>
        </ScrollView>
        <View style={[styles.row, styles.buttonRow]}>
          <Button style={styles.button} onPress={clickHandler} mode="flat">
            CANCEL
          </Button>
          <Button style={styles.button}>ADD</Button>
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

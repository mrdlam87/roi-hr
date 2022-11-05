import { useContext } from "react";
import { EmployeeContext } from "../contexts/employee.context";
import { StyleSheet, View, Text, Modal } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

const AddEmployeeModal = () => {
  const { showAddEmployee, setShowAddEmployee } = useContext(EmployeeContext);

  const clickHandler = () => setShowAddEmployee(false);

  return (
    <Modal transparent={true} visible={showAddEmployee} animationType="slide">
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Add Employee</Text>
        </View>
        <Button style={styles.button} onPress={clickHandler}>
          <Ionicons
            name="close"
            size={32}
            color={GlobalStyles.colors.secondaryLightGrey}
          />
        </Button>
      </View>
    </Modal>
  );
};

export default AddEmployeeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    elevation: 10,
    borderTopLeftRadius: GlobalStyles.borderRadius,
    borderTopRightRadius: GlobalStyles.borderRadius,
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
  },
  form: {
    flex: 1,
  },
  button: {
    alignSelf: "center",
    borderRadius: 50,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primaryRed,
  },
});

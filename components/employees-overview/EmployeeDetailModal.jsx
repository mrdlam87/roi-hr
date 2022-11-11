import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { useContext } from "react";
import { EmployeeContext } from "../../contexts/employee.context";
import { GlobalStyles } from "../../constants/styles";
import EmployeeDetailItem from "./EmployeeDetailItem";
import { Departments } from "../../constants/departments";
import Ionicons from "@expo/vector-icons/Ionicons";

const EmployeeDetailModal = () => {
  const {
    showEmployeeDetail,
    setShowEmployeeDetail,
    selectedEmployee,
    setSelectedEmployee,
    setShowAddEmployee,
  } = useContext(EmployeeContext);

  const backgroundClickHandler = (event) => {
    if (event.target === event.currentTarget) {
      setShowEmployeeDetail(false);
      setSelectedEmployee(null);
    }
  };

  const editClickHandler = () => {
    setShowAddEmployee(true);
    setShowEmployeeDetail(false);
  };

  if (!selectedEmployee) return;

  const {
    name,
    phone,
    department,
    addressStreet,
    addressCity,
    addressState,
    addressZip,
    addressCountry,
  } = selectedEmployee;

  const addressString = `${addressStreet}, ${addressCity}, ${addressState} ${addressZip}`;

  return (
    <Modal
      style={styles.modal}
      transparent={true}
      visible={showEmployeeDetail}
      animationType="fade"
    >
      <Pressable style={styles.container} onPress={backgroundClickHandler}>
        <View style={styles.card}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Pressable style={styles.iconButton} onPress={editClickHandler}>
              <Ionicons
                name="create"
                color={GlobalStyles.colors.secondaryLightGrey}
                size={30}
              />
            </Pressable>
          </View>
          <EmployeeDetailItem
            label={phone}
            style={styles.detail}
            textStyle={styles.detailText}
            iconName="call"
            iconSize={20}
          />
          <EmployeeDetailItem
            label={addressString}
            style={styles.detail}
            textStyle={styles.detailText}
            iconName="home"
            iconSize={20}
          />
          <EmployeeDetailItem
            label={addressCountry}
            style={styles.detail}
            textStyle={styles.detailText}
            iconName="globe"
            iconSize={20}
          />
          <EmployeeDetailItem
            label={Departments.find((d) => d.id === department)?.name}
            style={styles.detail}
            textStyle={styles.detailText}
            iconName="business"
            iconSize={20}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default EmployeeDetailModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(26, 26, 26, 0.7)",
  },
  card: {
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    padding: 10,
    width: "80%",
    borderRadius: GlobalStyles.borderRadius,
    elevation: 5,
  },
  nameContainer: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: GlobalStyles.colors.primaryRed,
    borderRadius: GlobalStyles.borderRadius,
  },
  nameText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  detail: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 5,
  },
  iconButton: {
    position: "absolute",
    right: 10,
  },
});

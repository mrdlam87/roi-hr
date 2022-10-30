import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedEmployee,
  selectShowEmployeeDetail,
} from "../../store/employees.selector";
import { setShowEmployeeDetail } from "../../store/employees.slice";
import { GlobalStyles } from "../../constants/styles";
import EmployeeDetailItem from "./EmployeeDetailItem";
import { Departments } from "../../constants/departments";

const EmployeeDetailModal = () => {
  const showEmployeeDetail = useSelector(selectShowEmployeeDetail);
  const selectedEmployee = useSelector(selectSelectedEmployee);
  const dispatch = useDispatch();

  const backgroundClickHandler = () => {
    dispatch(setShowEmployeeDetail(false));
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
  modal: {},
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(26, 26, 26, 0.8)",
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
});

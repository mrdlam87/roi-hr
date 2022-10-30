import { StyleSheet, View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import {
  setSelectedEmployee,
  setShowEmployeeDetail,
} from "../../store/employees.slice";
import { Departments } from "../../constants/departments";
import { GlobalStyles } from "../../constants/styles";
import EmployeeDetailItem from "./EmployeeDetailItem";

const EmployeeCard = ({ employee }) => {
  const {
    name,
    phone,
    department,
    addressStreet,
    addressCity,
    addressState,
    addressZip,
  } = employee;

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSelectedEmployee(employee));
    dispatch(setShowEmployeeDetail(true));
  };

  const addressString = `${addressStreet}, ${addressCity}, ${addressState} ${addressZip}`;

  return (
    <Pressable onPress={clickHandler}>
      <View style={styles.card}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name.split(" ")[0]}</Text>
          <Text style={styles.nameText}>{name.split(" ")[1]}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <EmployeeDetailItem
            label={phone}
            iconName="call"
            textStyle={styles.detailText}
          />
          <EmployeeDetailItem
            label={addressString}
            iconName="home"
            textStyle={styles.detailText}
            style={{ marginVertical: 5 }}
          />
          <EmployeeDetailItem
            label={Departments.find((d) => d.id === department).name}
            textStyle={styles.detailText}
            iconName="business"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    paddingVertical: 10,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: GlobalStyles.colors.primaryRed,
    borderRadius: GlobalStyles.borderRadius,
    elevation: 7,
  },
  nameText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  detailText: {
    color: GlobalStyles.colors.primaryDark,
  },
  detailsContainer: {
    flex: 4,
    justifyContent: "space-between",
    padding: 5,
  },
});

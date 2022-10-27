import { StyleSheet, View, Text } from "react-native";
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
    addressCountry,
  } = employee;

  const addressString = `${addressStreet}, ${addressCity}, ${addressState} ${addressZip}`;

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name.split(" ")[0]}</Text>
        <Text style={styles.nameText}>{name.split(" ")[1]}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <EmployeeDetailItem label={phone} iconName="call" />
        <EmployeeDetailItem label={addressString} iconName="home" />
        <EmployeeDetailItem
          label={Departments.find((d) => d.id === department).name}
          iconName="business"
        />
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 5,
    // elevation: 7,
    borderRadius: GlobalStyles.borderRadius,
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    marginTop: 30,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: GlobalStyles.colors.primaryRed,
    borderRadius: GlobalStyles.borderRadius,
  },
  nameText: {
    color: "white",
    textAlign: "center",
  },
  detailsContainer: {
    flex: 4,
    justifyContent: "space-between",
    padding: 5,
  },
});

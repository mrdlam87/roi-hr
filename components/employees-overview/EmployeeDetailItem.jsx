import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

const EmployeeDetailItem = ({ label, iconName }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} style={styles.icon} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default EmployeeDetailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
    color: GlobalStyles.colors.primaryRed,
  },
  text: {
    color: GlobalStyles.colors.secondaryLightGrey,
  },
});

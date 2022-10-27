import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

const EmployeeDetailItem = ({
  label,
  iconName,
  iconSize,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Ionicons
        name={iconName}
        style={styles.icon}
        size={iconSize && iconSize}
      />
      <Text style={[styles.text, textStyle]}>{label}</Text>
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

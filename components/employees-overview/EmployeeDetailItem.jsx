import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

/**
 *
 * @param {object} props
 * @param {string} props.label text label/description for employee attribute
 * @param {string} props.iconName name of Ionicon icon
 * @param {number} props.iconSize size of Ionicon icon
 * @param {object} props.style compatible React Native style object for container
 * @param {object} props.textStyle compatible React Native style object for label
 * @returns {JSX.Element} Custom round rectangle buttom component
 */
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

import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

/**
 *
 * @param {object} props
 * @param {string} props.label tab item label
 * @param {string} props.iconName name of Ionicon icon
 * @param {boolean} props.focused status for tab currently selected or in focus
 * @returns {JSX.Element} Custom round rectangle buttom component
 */
const TabItem = ({ label, iconName, focused }) => {
  return (
    <View style={styles.tabContainer}>
      <View style={[styles.icon, focused && styles.iconFocused]}>
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? GlobalStyles.colors.secondaryLightGrey : "#888"}
        />
      </View>
      <Text style={[styles.text, focused && styles.textFocused]}>{label}</Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 5,
  },
  iconFocused: {
    backgroundColor: GlobalStyles.colors.primaryRed,
    borderRadius: GlobalStyles.borderRadius,
    width: 40,
    alignItems: "center",
    // elevation: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: GlobalStyles.fonts.main,
    color: "#888",
  },
  textFocused: {
    color: GlobalStyles.colors.primaryRed,
    fontWeight: "bold",
  },
});

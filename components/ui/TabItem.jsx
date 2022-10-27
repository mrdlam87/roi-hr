import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

const TabItem = ({ label, iconName, focused }) => {
  return (
    <View style={styles.tabContainer}>
      <View style={[styles.icon, focused && styles.iconFocused]}>
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? GlobalStyles.colors.primaryRed : "#888"}
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
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
    borderRadius: GlobalStyles.borderRadius,
    width: 40,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: GlobalStyles.fonts.main,
    color: "#888",
  },
  textFocused: {
    color: GlobalStyles.colors.secondaryLightGrey,
    fontWeight: "bold",
  },
});

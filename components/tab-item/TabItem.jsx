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
          color={
            focused
              ? GlobalStyles.colors.primaryRed
              : GlobalStyles.colors.secondaryLightGrey
          }
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
    backgroundColor: "#aaa",
    borderRadius: GlobalStyles.borderRadius,
    width: 40,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: GlobalStyles.colors.primaryGrey,
  },
  textFocused: {
    color: "#761414",
    fontWeight: "bold",
  },
});

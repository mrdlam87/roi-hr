import { StyleSheet, View, Text, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ style, value, onChange }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={GlobalStyles.colors.secondaryMidGrey}
        cursorColor={GlobalStyles.colors.primaryRed}
        value={value}
        onChangeText={onChange}
      />
      <Ionicons name="search-circle" size={28} style={styles.icon} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    borderRadius: GlobalStyles.borderRadius,
    height: 30,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  icon: {
    color: GlobalStyles.colors.primaryRed,
    marginLeft: 15,
  },
});

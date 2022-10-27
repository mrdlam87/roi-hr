import { StyleSheet, View, Text, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const SearchBar = ({ style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder="Search"
      placeholderTextColor={GlobalStyles.colors.secondaryMidGrey}
      cursorColor={GlobalStyles.colors.primaryRed}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: "white",
    paddingHorizontal: 15,
    borderRadius: GlobalStyles.borderRadius,
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    height: 30,
  },
});

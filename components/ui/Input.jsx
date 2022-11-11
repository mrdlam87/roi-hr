import { StyleSheet, View, Text, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, style, ...inputConfig }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        cursorColor={GlobalStyles.colors.primaryRed}
        placeholder={label}
        placeholderTextColor="#33333327e"
        {...inputConfig}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginHorizontal: 8,
  },
  label: {
    color: GlobalStyles.colors.primaryRed,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    borderRadius: GlobalStyles.borderRadius,
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    padding: 6,
    fontSize: 16,
    color: GlobalStyles.colors.primaryDark,
  },
});

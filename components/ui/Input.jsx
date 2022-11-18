import { StyleSheet, View, Text, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 *
 * @param {object} props
 * @param {object} props.label text input label tag
 * @param {object} props.style compatible React Native style object
 * @param {boolean} props.valid status for valid selection
 * @param {object[]} props.inputConfig array of remaining properties
 * @returns {JSX.Element} Custom picker for department options
 */
const Input = ({ label, style, valid, ...inputConfig }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, valid || styles.invalidLabel]}>{label}</Text>
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
  invalidLabel: {
    color: GlobalStyles.colors.error,
  },
});

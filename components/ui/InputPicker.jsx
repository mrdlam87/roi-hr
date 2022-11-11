import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { GlobalStyles } from "../../constants/styles";

const InputPicker = ({ children, label, style, ...pickerConfig }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          dropdownIconColor={GlobalStyles.colors.primaryRed}
          {...pickerConfig}
        >
          <Picker.Item label={label} style={styles.pickerItem} value={-1} />
          {children}
        </Picker>
      </View>
    </View>
  );
};

export default InputPicker;

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
  pickerContainer: {
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    borderRadius: GlobalStyles.borderRadius,
    height: 40,
    justifyContent: "center",
  },
  pickerItem: {
    color: "#3333337e",
  },
});

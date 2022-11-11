import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { GlobalStyles } from "../../constants/styles";
import InputPicker from "./InputPicker";

const StatePicker = ({ style, valid, ...pickerConfig }) => {
  return (
    <InputPicker label="State" style={style} valid={valid} {...pickerConfig}>
      <Picker.Item style={styles.pickerItem} label="NSW" value="NSW" />
      <Picker.Item style={styles.pickerItem} label="VIC" value="VIC" />
      <Picker.Item style={styles.pickerItem} label="QLD" value="QLD" />
      <Picker.Item style={styles.pickerItem} label="SA" value="SA" />
      <Picker.Item style={styles.pickerItem} label="WA" value="WA" />
      <Picker.Item style={styles.pickerItem} label="TAS" value="TAS" />
      <Picker.Item style={styles.pickerItem} label="NT" value="NT" />
      <Picker.Item style={styles.pickerItem} label="ACT" value="ACT" />
    </InputPicker>
  );
};

export default StatePicker;

const styles = StyleSheet.create({
  pickerItem: { color: GlobalStyles.colors.primaryDark },
});

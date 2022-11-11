import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { GlobalStyles } from "../../constants/styles";
import InputPicker from "./InputPicker";

const DepartmentPicker = ({ style, valid, ...pickerConfig }) => {
  return (
    <InputPicker
      label="Department"
      style={style}
      valid={valid}
      {...pickerConfig}
    >
      <Picker.Item style={styles.pickerItem} label="General" value={0} />
      <Picker.Item
        style={styles.pickerItem}
        label="Information Technology"
        value={1}
      />
      <Picker.Item style={styles.pickerItem} label="Finance" value={2} />
      <Picker.Item style={styles.pickerItem} label="Marketing" value={3} />
      <Picker.Item
        style={styles.pickerItem}
        label="Human Resources"
        value={4}
      />
    </InputPicker>
  );
};

export default DepartmentPicker;

const styles = StyleSheet.create({
  pickerItem: { color: GlobalStyles.colors.primaryDark },
});

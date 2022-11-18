import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { GlobalStyles } from "../../constants/styles";
import InputPicker from "./InputPicker";

/**
 *
 * @param {object} props
 * @param {object} props.style compatible React Native style object
 * @param {boolean} props.valid status for valid selection
 * @param {object[]} props.pickerConfig array of remaining properties
 * @returns {JSX.Element} Custom picker for department options
 */
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

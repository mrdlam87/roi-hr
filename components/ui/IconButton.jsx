import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

/**
 *
 * @param {object} props
 * @param {string} props.iconName name of Ionicon icon
 * @param {object} props.style compatible React Native style object
 * @param {callback} props.onPress callback function for onPress handler
 * @param {string} props.color icon colour
 * @param {number} props.size icon size
 * @returns {JSX.Element} Custom round rectangle buttom component
 */
const IconButton = ({ iconName, style, onPress, color, size }) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Ionicons name={iconName} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});

import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ iconName, style, onPress, color, size }) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Ionicons name={iconName} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});

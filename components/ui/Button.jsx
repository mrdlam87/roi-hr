import { StyleSheet, View, Text, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, onPress, style, textStyle }) => {
  const padding = {
    padding: style?.padding,
    paddingVertical: style?.paddingVertical,
    paddingHorizontal: style?.paddingHorizontal,
  };

  const zeroPadding = { padding: 0, paddingHorizontal: 0, paddingVertical: 0 };

  return (
    <View style={[styles.buttonContainer, style, zeroPadding]}>
      <Pressable
        style={style ? padding : styles.button}
        android_ripple={{ color: "grey" }}
        onPress={onPress}
      >
        <Text style={textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderRadius: GlobalStyles.borderRadius,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "blue",
  },
});

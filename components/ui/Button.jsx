import { StyleSheet, View, Text, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        mode === "flat" && styles.flatContainer,
        style,
      ]}
    >
      <Pressable
        style={[styles.button, mode === "flat" && styles.flat]}
        android_ripple={{ color: "grey" }}
        onPress={onPress}
      >
        <Text style={[styles.text, mode === "flat" && styles.flatText]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderRadius: GlobalStyles.borderRadius,
    elevation: 7,
  },
  flatContainer: {
    elevation: 0,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: GlobalStyles.borderRadius,
    backgroundColor: GlobalStyles.colors.primaryRed,
  },
  flat: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  text: {
    color: "white",
    fontFamily: GlobalStyles.fonts.main,
    fontWeight: "bold",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primaryRed,
  },
});

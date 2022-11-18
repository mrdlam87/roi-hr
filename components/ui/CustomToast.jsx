import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 *
 * @param {object} props
 * @param {string} props.text1 string for toast message
 * @returns {JSX.Element} Custom toast component
 */
const CustomToast = ({ text1 }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "80%",
    backgroundColor: GlobalStyles.colors.secondaryLightOrangeTrans,
    borderRadius: GlobalStyles.borderRadius,
    elevation: 7,
  },
  text: {
    color: GlobalStyles.colors.secondaryLightGrey,
    fontFamily: GlobalStyles.fonts.main,
    fontWeight: "bold",
    fontSize: 16,
  },
});

import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

const DepartmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DEPARTMENTS</Text>
    </View>
  );
};

export default DepartmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
  },
});

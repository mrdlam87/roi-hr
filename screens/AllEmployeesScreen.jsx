import { StyleSheet, View, Text } from "react-native";

const AllEmployeesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ALL EMPLOYEES</Text>
    </View>
  );
};

export default AllEmployeesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

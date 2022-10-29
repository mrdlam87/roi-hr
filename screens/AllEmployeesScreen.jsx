import { StyleSheet, View, FlatList } from "react-native";
import { useContext } from "react";
import { EmployeeContext } from "../contexts/employee.context";
import EmployeeDetailModal from "../components/employees-overview/EmployeeDetailModal";
import NameList from "../components/employees-overview/NameList";
import { GlobalStyles } from "../constants/styles";

const AllEmployeesScreen = () => {
  const { availableLetters } = useContext(EmployeeContext);

  const renderItems = ({ item }) => <NameList letter={item} />;

  return (
    <View style={styles.container}>
      <EmployeeDetailModal />
      <FlatList data={availableLetters} renderItem={renderItems} />
    </View>
  );
};

export default AllEmployeesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
  },
});

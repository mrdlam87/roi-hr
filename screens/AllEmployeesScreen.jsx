import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import EmployeeDetailModal from "../components/employees-overview/EmployeeDetailModal";
import NameList from "../components/employees-overview/NameList";
import { Letters } from "../constants/general";
import { GlobalStyles } from "../constants/styles";
import { selectSearchedEmployees } from "../store/employees.selector";

const AllEmployeesScreen = () => {
  const searchedEmployees = useSelector(selectSearchedEmployees);

  const availableLetters = Letters.filter((letter) =>
    searchedEmployees.some((employee) => employee.name.startsWith(letter))
  );

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

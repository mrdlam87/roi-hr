import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import DepartmentList from "../components/departments/DepartmentList";
import { GlobalStyles } from "../constants/styles";
import {
  selectEmployees,
  selectSearchedDepartments,
} from "../store/employees.selector";

const DepartmentsScreen = () => {
  const searchedDepartments = useSelector(selectSearchedDepartments);
  const employees = useSelector(selectEmployees);

  const availableDepartments = searchedDepartments.filter((department) =>
    employees.some((employee) => employee.department === department.id)
  );
  const renderItems = ({ item }) => <DepartmentList department={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={availableDepartments} renderItem={renderItems} />
    </View>
  );
};

export default DepartmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
  },
});

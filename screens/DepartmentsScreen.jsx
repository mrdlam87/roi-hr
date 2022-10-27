import { StyleSheet, View, Text, FlatList } from "react-native";
import DepartmentList from "../components/departments/DepartmentList";
import { GlobalStyles } from "../constants/styles";
import { Employees } from "../constants/employees";
import { useContext } from "react";
import { EmployeeContext } from "../contexts/employee.context";

const DepartmentsScreen = () => {
  const { searchedDepartments } = useContext(EmployeeContext);

  const renderItems = ({ item }) => <DepartmentList department={item} />;
  const availableDepartments = searchedDepartments.filter(
    (department) =>
      Employees.filter((employee) => employee.department === department.id)
        .length > 0
  );

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
    paddingHorizontal: 15,
  },
});

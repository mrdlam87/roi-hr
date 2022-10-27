import { StyleSheet, View, Text, FlatList } from "react-native";
import DepartmentList from "../components/departments/DepartmentList";
import { GlobalStyles } from "../constants/styles";
import { Departments } from "../constants/departments";
import { Employees } from "../constants/employees";

const DepartmentsScreen = () => {
  const renderItems = ({ item }) => <DepartmentList department={item} />;
  const availableDepartments = Departments.filter(
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

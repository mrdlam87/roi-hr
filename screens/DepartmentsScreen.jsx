import { StyleSheet, View, FlatList } from "react-native";
import { useContext } from "react";
import { EmployeeContext } from "../contexts/employee.context";
import DepartmentList from "../components/departments/DepartmentList";
import { GlobalStyles } from "../constants/styles";

const DepartmentsScreen = () => {
  const { availableDepartments } = useContext(EmployeeContext);

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
    paddingHorizontal: 15,
  },
});

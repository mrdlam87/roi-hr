import { StyleSheet, View, Text, FlatList } from "react-native";
import { Employees } from "../../constants/employees";
import { GlobalStyles } from "../../constants/styles";
import EmployeeCard from "../employees-overview/EmployeeCard";

const DepartmentList = ({ department }) => {
  const { id, name } = department;

  const employees = Employees.filter((employee) => employee.department === id);

  const renderItems = ({ item }) => <EmployeeCard employee={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FlatList
        data={employees}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default DepartmentList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.primaryDark,
  },
  separator: {
    borderTopWidth: 2,
    borderTopColor: "#ccc",
    marginVertical: 10,
  },
});

import { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { EmployeeContext } from "../../contexts/employee.context";
import EmployeeCard from "../employees-overview/EmployeeCard";

/**
 *
 * @param {object} props
 * @param {object} props.department a single department object
 * @returns {JSX.Element} Custom flat list for specified department
 */
const DepartmentList = ({ department }) => {
  const { id, name } = department;
  const { employees } = useContext(EmployeeContext);

  //select only the employees for current department list
  const filteredEmployees = employees
    ?.filter((employee) => employee.department === id)
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const renderItems = ({ item }) => <EmployeeCard employee={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FlatList
        data={filteredEmployees}
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
    paddingHorizontal: 15,
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

import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../../constants/styles";
import { selectSearchedEmployees } from "../../store/employees.selector";
import EmployeeCard from "../employees-overview/EmployeeCard";

const NameList = ({ letter }) => {
  const searchedEmployees = useSelector(selectSearchedEmployees);

  const employees = searchedEmployees.filter((employee) =>
    employee.name.startsWith(letter)
  );

  const renderItems = ({ item }) => <EmployeeCard employee={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{letter}</Text>
      <FlatList
        data={employees}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default NameList;

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

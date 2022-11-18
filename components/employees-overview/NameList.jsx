import { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { EmployeeContext } from "../../contexts/employee.context";
import EmployeeCard from "../employees-overview/EmployeeCard";

/**
 *
 * @param {object} props
 * @param {string} props.letter the label for single letter
 * @returns {JSX.Element} Custom flat list for specified letter
 */
const NameList = ({ letter }) => {
  const { searchedEmployees } = useContext(EmployeeContext);

  //select only employees beginning with specified letter
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

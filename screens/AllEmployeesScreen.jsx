import { StyleSheet, View, Text, FlatList } from "react-native";
import EmployeeCard from "../components/employees-overview/EmployeeCard";
import EmployeeDetailModal from "../components/employees-overview/EmployeeDetailModal";
import SearchBar from "../components/ui/SearchBar";
import { Employess } from "../constants/employess";
import { GlobalStyles } from "../constants/styles";

const AllEmployeesScreen = () => {
  const renderItems = ({ item }) => <EmployeeCard employee={item} />;
  const sortedEmployees = Employess.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <View style={styles.container}>
      <EmployeeDetailModal />
      <FlatList
        data={sortedEmployees}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AllEmployeesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
  },
  searchBar: {
    marginTop: 30,
  },
});

import { StyleSheet, View, Text, Pressable } from "react-native";
import SearchBar from "./SearchBar";
import { GlobalStyles } from "../../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import { EmployeeContext } from "../../contexts/employee.context";

const Header = () => {
  const { searchString, setSearchString } = useContext(EmployeeContext);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="menu" size={24} style={styles.icon} />
        </Pressable>
        <SearchBar
          style={styles.searchBar}
          value={searchString}
          onChange={setSearchString}
        />
        <Pressable style={styles.iconContainer}>
          <Ionicons name="funnel" size={20} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyles.colors.primaryRed,
    elevation: 10,
  },
  contentContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignItems: "center",
  },
  searchBar: {
    flex: 5,
    marginHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    borderRadius: GlobalStyles.borderRadius,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: GlobalStyles.colors.primaryRed,
  },
});

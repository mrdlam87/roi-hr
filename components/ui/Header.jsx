import { StyleSheet, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSearchString } from "../../store/employees.slice";
import { selectSearchString } from "../../store/employees.selector";

import SearchBar from "./SearchBar";
import { GlobalStyles } from "../../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(selectSearchString);

  const changeHandler = (value) => {
    const inputString = value;
    dispatch(setSearchString(inputString));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="menu" size={24} style={styles.icon} />
        </Pressable>
        <SearchBar
          style={styles.searchBar}
          value={searchString}
          onChange={changeHandler}
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

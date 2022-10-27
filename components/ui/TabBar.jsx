import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AllEmployeesScreen from "../../screens/AllEmployeesScreen";
import DepartmentsScreen from "../../screens/DepartmentsScreen";
import TabItem from "./TabItem";
import SearchBar from "./SearchBar";
import { GlobalStyles } from "../../constants/styles";
import Header from "./Header";

const TabBar = () => {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: GlobalStyles.colors.primaryRed,
        },
      }}
    >
      <BottomTabs.Screen
        name="AllEmployees"
        component={AllEmployeesScreen}
        options={{
          header: () => <Header />,
          tabBarIcon: ({ focused }) => (
            <TabItem label="All Employees" iconName="list" focused={focused} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Departments"
        component={DepartmentsScreen}
        options={{
          header: () => <Header />,

          tabBarIcon: ({ focused }) => (
            <TabItem
              label="Departments"
              iconName="business"
              focused={focused}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});

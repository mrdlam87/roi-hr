import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AllEmployeesScreen from "../../screens/AllEmployeesScreen";
import DepartmentsScreen from "../../screens/DepartmentsScreen";
import TabItem from "../tab-item/TabItem";
import { GlobalStyles } from "../../constants/styles";

const TabBar = () => {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 5,
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 15,
          right: 15,
          borderRadius: GlobalStyles.borderRadius,
          height: 60,
        },
      }}
    >
      <BottomTabs.Screen
        name="AllEmployees"
        component={AllEmployeesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem label="All Employees" iconName="list" focused={focused} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Departments"
        component={DepartmentsScreen}
        options={{
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

const style = StyleSheet.create({});

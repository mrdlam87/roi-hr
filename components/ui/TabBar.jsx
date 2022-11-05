import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEmployeesScreen from "../../screens/AllEmployeesScreen";
import DepartmentsScreen from "../../screens/DepartmentsScreen";
import AddEmployeeModal from "../../screens/AddEmployeeModal";
import TabItem from "./TabItem";
import { GlobalStyles } from "../../constants/styles";
import Header from "./Header";
import AddButton from "./AddButton";

const TabBar = () => {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          // elevation: 10,
          // position: "absolute",
          // bottom: 10,
          // left: 10,
          // right: 10,
          borderRadius: GlobalStyles.borderRadius,
          backgroundColor: "#eee",
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
        name="AddEmployee"
        component={AddEmployeeModal}
        listeners={{ tabPress: (e) => e.preventDefault() }}
        options={{
          tabBarIcon: () => <AddButton />,
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

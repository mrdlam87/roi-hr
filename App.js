import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { EmployeeProvider } from "./contexts/employee.context";
import { useFonts } from "expo-font";
import TabBar from "./components/ui/TabBar";
import LoginScreen from "./screens/LoginScreen";
import EmployeeDetailModal from "./components/employees-overview/EmployeeDetailModal";
import AddEmployeeModal from "./screens/AddEmployeeModal";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Trebuchet-MS": require("./assets/fonts/trebuc.ttf"),
    "Trebuchet-Bold": require("./assets/fonts/trebucbd.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <EmployeeProvider>
        <EmployeeDetailModal />
        <AddEmployeeModal />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="EmployeesOverview"
              component={TabBar}
              options={{}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EmployeeProvider>
    </>
  );
}

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { setEmployees } from "./store/employees.slice";
import { useFonts } from "expo-font";
import TabBar from "./components/ui/TabBar";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";

const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    "Trebuchet-MS": require("./assets/fonts/trebuc.ttf"),
    "Trebuchet-Bold": require("./assets/fonts/trebucbd.ttf"),
  });

  useEffect(() => {
    fetch("https://mrdlam87.github.io/roi-hr-api/employees.json")
      .then((response) => response.json())
      .then((employees) => dispatch(setEmployees(employees)));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
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
    </>
  );
};

export default AppWrapper;

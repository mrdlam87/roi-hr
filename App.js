import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import TabBar from "./components/ui/TabBar";
import LoginScreen from "./screens/LoginScreen";

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
  );
}

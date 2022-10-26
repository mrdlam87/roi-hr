import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/styles";

const LoginScreen = ({ navigation }) => {
  const loginHandler = () => navigation.navigate("EmployeesOverview");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo_main.png")}
        style={styles.image}
      />
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={loginHandler}
      >
        LOGIN
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 190,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: GlobalStyles.colors.primaryRed,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
  },
});

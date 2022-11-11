import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/styles";

const LoginScreen = ({ navigation }) => {
  const loginHandler = () => navigation.navigate("EmployeesOverview");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/logo_main.png")}
          style={styles.image}
        />
      </View>
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
    backgroundColor: GlobalStyles.colors.secondaryLightGrey,
  },
  imageContainer: {
    backgroundColor: "black",
    elevation: 7,
    marginBottom: 20,
  },
  image: {
    width: 190,
    height: 100,
  },
  button: {
    width: "25%",
  },
  buttonText: {
    color: "white",
    fontFamily: GlobalStyles.fonts.main,
  },
});

import { useContext } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { EmployeeContext } from "../../contexts/employee.context";

const AddButton = () => {
  const { setShowAddEmployee } = useContext(EmployeeContext);

  const clickHandler = () => setShowAddEmployee(true);

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={clickHandler}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/logo_main.png")}
        />
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    elevation: 5,
    top: -20,
  },
  image: {
    width: 95,
    height: 50,
  },
  text: {
    fontSize: 14,
    fontFamily: GlobalStyles.fonts.main,
    color: "#888",
  },
  pressed: {
    opacity: 0.75,
  },
});

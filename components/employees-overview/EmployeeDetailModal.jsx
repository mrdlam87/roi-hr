import { StyleSheet, View, Text, Modal } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const EmployeeDetailModal = ({ employee }) => {
  // const {
  //   name,
  //   phone,
  //   department,
  //   addressStreet,
  //   addressCity,
  //   addressState,
  //   addressZip,
  //   addressCountry,
  // } = employee;

  const backgroundClickHandler = () => {
    console.log("bg");
  };

  return (
    <Modal style={styles.modal} transparent={true} visible={false}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>TEST</Text>
        </View>
      </View>
    </Modal>
  );
};

export default EmployeeDetailModal;

const styles = StyleSheet.create({
  modal: {},
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(26, 26, 26, 0.8)",
  },
  card: {
    backgroundColor: GlobalStyles.colors.secondaryLightOrange,
    padding: 100,
    borderRadius: GlobalStyles.borderRadius,
    elevation: 5,
  },
});

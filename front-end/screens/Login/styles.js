import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#DFF3E4",
  },
  background: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 200,
  },
  loginContainer: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 80,
    // backgroundColor: "blue",
  },
  inputContainer: {
    marginTop: 30,
    width: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  loginHeader: {
    fontSize: 32,
    textAlign: "left",
  },
  loginInput: {
    borderWidth: 1,
    fontSize: 18,
    marginVertical: 5,
    borderRadius: 4,
    padding: 5,
    borderColor: "#B0B0B0",
  },
  button: {
    //textAlign: "center",
    borderRadius: 20,
    padding: 8,
    width: 100,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#008DD5",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "900",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#DFF3E4",
  },
  register: {
    marginTop: 12,
  },
  registerText: {
    color: "#008DD5",
    fontSize: 18,
  },
});

export default styles;

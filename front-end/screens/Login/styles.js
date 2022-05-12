import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF3E4",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  loginContainer: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  inputContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  loginHeader: {
    fontSize: 32,
  },
  loginInput: {
    borderWidth: 1,
    fontSize: 18,
    marginVertical: 5,
    borderRadius: 4,
    padding: 5,
    borderColor: "#D3D3D3",
  },
  button: {
    textAlign: "center",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#DFF3E4",
  },
  flatList: {
    flexDirection: "row",

    height: 40,
    width: 300,
  },
  editButton: {
    backgroundColor: "red",
  },
  editText: {
    fontSize: 16,
  },
});

export default styles;

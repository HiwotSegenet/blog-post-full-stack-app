import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#008DD5",
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 22,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#DFF3E4",
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 6,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#dae0e9",
    paddingLeft: 15,
    width: "100%",
    fontSize: 18,
    fontWeight: "300",
    letterSpacing: 1,
    color: "#dae0e9",
  },
  loginText: {
    fontSize: 16,
    color: "#DFF3E4",
  },
  loginButton: {
    alignSelf: "flex-end",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#4caad5",
    paddingVertical: 10,
    paddingHorizontal: "12.5%",
    marginTop: 32,
    marginBottom: 150,
    marginRight: 22,
    backgroundColor: "#4caad5",
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DFF3E4",
  },

  backButton: {
    backgroundColor: "#4caad5",
    marginLeft: 22,
    marginBottom: 120,
    borderRadius: 50,
  },
});

export default styles;

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 60,
    marginBottom: 80,
  },

  //------ Buttons ----------
  registerButton: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#4caad5",
    paddingVertical: 10,
    paddingHorizontal: "10%",
    marginVertical: 20,
    backgroundColor: "#4caad5",
  },
  loginButton: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#4caad5",
    paddingVertical: 10,
    paddingHorizontal: "12.5%",
    backgroundColor: "#4caad5",
  },
  registerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f6f9ff",
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f6f9ff",
  },
});

export default styles;

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#3C2C32",
  },
  loginContainer: {
    width: 360,
    padding: 32,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
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
    fontSize: 20,
    color: "#000",
  },
  loginButton: {
   
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#4caad5",
    paddingVertical: 10,
    paddingHorizontal: "12.5%",
    marginTop: 20,
    marginBottom: 150,
    marginRight: 22,
    backgroundColor: "#EFD064",
    width:300,
    alignSelf: "center",
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    alignSelf:'center'
  },

  backButton: {
    backgroundColor: "#EFD064",
    marginLeft: 20,
    marginBottom: 80,
    borderRadius: 50,
    marginTop:90
  },
});

export default styles;

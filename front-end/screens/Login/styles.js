import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:"#654321"
  },
  background: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: "20%",
    
  },
  loginContainer: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: "blue",
  },
  inputContainer: {
    width: "100%",
    // backgroundColor:"#558CAB",
    padding:40,
    borderRadius:20,
    
  },
  buttonContainer: {
    flexDirection: "row",
  },
  loginHeader: {
    fontSize: 22,
    textAlign: "left",
    color:"#000"
  },
  loginInput: {
    borderWidth: 1,
    fontSize: 23,
    marginVertical: 5,
    borderRadius: 4,
    padding: 5,
    borderColor: "#000",
    

  },
  button: {
    //textAlign: "center",
    borderRadius: 10,
    padding: 8,
    width: 300,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "#EFD064",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "900",
    color:"#000"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    padding:0
    
  },
  register: {
    marginTop: 25,
  },
  registerText: {
    color: "#fff",
    fontSize: 22,
    width:300,
    backgroundColor: "#EFD064",
    textAlign:'center',
    padding: 8,
    borderRadius:10,
  },
});

export default styles;

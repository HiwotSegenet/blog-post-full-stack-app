import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#4CAB72",
  },
  homeImg: {
    width: 500,
    flex: 1,
    resizeMode: "cover",
    height: 850,
    position: "absolute",
    // bottom: 40,
    // top: 20,
  },
  view2Container: {
    backgroundColor: "rgba(75,88,81,0.8)",
    position: "absolute",
    width: 290,
    height: 360,
    paddingTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(75,88,81,1)",
    bottom: 50,
  },
  text: {
    color: "#F4F4F4",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  view2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text1: {
    color: "white",
    fontSize: 13,
  },
  loginText: {
    color: "#45CA88",
    fontWeight: "bold",
  },
  view3: {
    marginLeft: 30,
    marginTop: 19,
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 10,
  },
  textBox: {
    width: 200,
    borderBottomWidth: 1,
    borderColor: "white",
    color: "white",
  },
  signupText: {
    backgroundColor: "#4CAB72",
    width: 150,
    height: 30,
    borderRadius: 20,
    textAlign: "center",
    marginTop: 30,
    fontSize: 14,
    paddingTop: 5,
    fontWeight: "bold",
    marginLeft: 25,
    color: "white",
  },
});

export default styles;

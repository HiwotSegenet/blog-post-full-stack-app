import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#4caa",
  },
  adminBg: {
    width: 500,
    height: 850,
    position: "absolute",
    flex: 1,
    resizeMode: "stretch",
    // bottom: 100,
    // top: -50,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 10,
    backgroundColor: "rgba(75,88,81,0.9)",
    borderRadius: 40,
    paddingBottom: 20,
    margin: 10,

  },
  iconEdit: {
    marginTop: 5,
  },
  blogTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 5,
    textAlign: "center",
  },
  blogBody: {
    fontSize: 18,
    marginTop: 16,
    marginHorizontal: 14,
    color:"white", 
    margin: 10,
  },
  backButton: {
    // backgroundColor: "white",
    // marginLeft: 22,
    // marginTop: 60,
    // marginBottom: -90,
    // borderRadius: 50,
    // alignSelf: "flex-start",
    backgroundColor: "white",
    marginLeft: 22,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  blogAuthor: {
    color: "white",
    fontSize: 15,
    marginTop: 10
  },
});
export default styles;

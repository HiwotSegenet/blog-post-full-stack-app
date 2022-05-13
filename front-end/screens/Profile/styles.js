import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caad5",
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",

    marginTop: 160,
  },
  flatlist: {
    marginVertical: 10,
    padding: 20,
  },
  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "#eaeaea",
    height: 80,
    width: 300,
    margin: 10,
    marginBottom: 40,
  },
  editButton: {
    backgroundColor: "red",
  },
  blogContainer: {
    flexDirection: "column",
  },
  blogTitle: {
    fontSize: 20,
    color: "black",
  },
  blogText: {
    fontSize: 16,
    color: "black",
  },
});
export default styles;

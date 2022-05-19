import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008DD5",
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  flatlist: {
    marginVertical: 10,
    padding: 20,
  },
  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "#eaeaea",
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
  backButton: {
    backgroundColor: "#4caad5",
    marginLeft: 22,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
});
export default styles;

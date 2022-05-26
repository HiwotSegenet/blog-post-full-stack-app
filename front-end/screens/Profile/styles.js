import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe4ea",
    justifyContent: "center",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 80,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  flatlist: {
    alignSelf: "center",
    marginVertical: 10,
    width: "90%",
  },
  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "#f1f2f6",
    borderRadius: 8,
    height: 120,
    width: "100%",
    marginVertical: 10,
  },
  blogOptions: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  editButton: {
    backgroundColor: "red",
  },
  blogContainer: {
    flexDirection: "column",
  },
  blogTitle: {
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: "#374151",
  },
  blogText: {
    marginLeft: 20,
    fontSize: 18,
    color: "#452e4f",
  },
  backButton: {
    backgroundColor: "#4caad5",
    marginLeft: 22,
    borderRadius: 50,
  },
  signOutButton: {
    //alignSelf: "flex-end",
    marginRight: 22,
  },
});
export default styles;

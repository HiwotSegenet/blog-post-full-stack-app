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
  blogContainer: {
    flexDirection: "column",
  },
  blogTitle: {
    marginLeft: 20,
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

  /*---- Modal Starts Here ----*/
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  modalView: {
    //margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    //padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "99%",
    height: "20%",
  },
  closeModal: {
    alignSelf: "flex-end",
    marginBottom: 15,
    marginTop: 10,
    marginRight: 15,
    //marginLeft: 100,
  },
  buttonContainer: {
    width: "100%",
  },
  modalText: {
    fontSize: 24,
    color: "#374151",
  },
  modalButton: {
    alignItems: "center",
  },
  editButton: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  deleteButton: {
    paddingTop: 10,
  },
});
export default styles;

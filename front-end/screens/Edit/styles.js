import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#DFF3E4",
    backgroundColor: "#dfe4ea",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 20,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 80,
  },
  backButton: {
    backgroundColor: "#4caad5",
    marginLeft: 22,
    borderRadius: 50,
  },

  publishButton: {
    borderRadius: 20,
    padding: 8,
    width: 122,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#008DD5",
    flexDirection: "row",
    justifyContent: "center",
  },
  publishText: {
    textAlign: "center",
    fontSize: 18,
    color: "#DFF3E4",
    marginRight: 5,
  },
  closeModal: {
    alignSelf: "flex-end",
    marginBottom: 20,
    //marginLeft: 100,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  blogContent: {
    height: "80%",
    width: "95%",
  },
  title: {
    fontSize: 24,
    marginBottom: 6,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    marginBottom: 20,
    fontSize: 18,
  },
});
export default styles;

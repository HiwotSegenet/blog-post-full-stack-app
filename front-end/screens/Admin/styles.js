import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe4ea",
    justifyContent: "center",
    //backgroundColor: "#f5fcfe",
  },
  latestContainer: {
    marginLeft: 20,
  },
  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "#f1f2f6",
    borderRadius: 8,
    height: 120,
    width: "100%",
    marginVertical: 10,
  },

  headerContainer: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 50,
  },
  latestHeader: {
    fontSize: 32,
    fontWeight: "bold",
    //color: "#452e4f",
    color: "#000",
  },
  flatlist: {
    alignSelf: "center",
    marginVertical: 10,
    width: "90%",
    //flexWrap: "nowrap",
  },
  profileButton: {
    alignSelf: "flex-end",
    marginRight: 35,
  },

  headerText: {
    fontSize: 24,
    marginVertical: 20,
  },

  blogInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  blogAuthor: {
    fontSize: 18,
    marginLeft: 20,
    marginRight: 5,
  },
  blogDot: {
    fontSize: 32,
    color: "#000",
  },
  blogDate: {
    fontSize: 16,
    color: "#374151",
    marginLeft: 5,
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

  /**-----------Modal Button----------*/
  buttonContainer: {
    height: "11%",
    paddingVertical: 0,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
  },
  modalButton: {
    alignSelf: "flex-end",
    marginTop: 15,
    height: 80,
    marginRight: 25,
    backgroundColor: "rgba(52, 52, 52, 0)",
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
    padding: 25,
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
    height: "80%",
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
  modalTitle: {
    fontSize: 20,
    marginBottom: 6,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTextInput: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default styles;

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008DD5",
    //backgroundColor: "#f5fcfe",
  },
  latestContainer: {
    marginLeft: 20,
  },
  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "#eaeaea",
    height: 80,
    width: 300,
    margin: 10,
  },

  center: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 80,
  },
  latestHeader: {
    fontSize: 32,
    fontWeight: "bold",
    //color: "#452e4f",
    color: "#f5fcfe",
  },
  flatlist: {
    alignSelf: "center",
    marginVertical: 10,
  },

  editButton: {
    backgroundColor: "red",
  },

  blogTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#374151",
  },
  blogText: {
    fontSize: 18,
    color: "#452e4f",
  },

  /** Modal Button */
  buttonContainer: {
    //flex: 1,
    height: "11%",
    paddingVertical: 0,
    //backgroundColor: "black",
  },
  modalButton: {
    alignSelf: "flex-end",
    marginTop: 15,
    height: 80,
    marginRight: 25,
    backgroundColor: "#008DD5",
  },
  /*---- Modal Starts Here ----*/
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;

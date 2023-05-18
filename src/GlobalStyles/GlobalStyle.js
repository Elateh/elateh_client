import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  backgroundOfPages: {
    backgroundColor: "#ffcf55",
    flex: 1,
    overflow: "hidden",
  },
  circle: {
    height: 535,
    width: 546,
    backgroundColor: "#fff",
    top: "10%",
    borderRadius: 9000,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    alignSelf: "center",
    elevation: 25,
  },
  blockOfTextInput: {
    top: "18%",
    position: "relative",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    borderColor: "#c0c3c4",
    width: "56%",
    height: "9%",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    position: "relative",
    flex: 1,
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 19,
    color: "#656565",
  },
  settupButton: {
    position: "relative",
    alignSelf: "center",
    top: "10%",
    backgroundColor: "#bf97ff",
    height: 42,
    borderColor: "#f8fdff",
    borderRadius: 20,
    elevation: 6,
  },
  textInSettupButton: {
    marginTop: 6,
    fontSize: 23,
    fontWeight: 600,
    color: "#fff",
    alignSelf: "center",
    position: "relative",
  },
  headText: {
    fontSize: 36,
    fontWeight: 600,
    alignSelf: "center",
    position: "relative",
  },
  textUnderInput: {
    fontWeight: 600,
    alignSelf: "center",
    position: "relative",
    color: "#723fc6",
  },
  goBackArrow: {
    marginTop: 80,
    width: 30,
    alignSelf: "center",
    justifyContent: "center",
    transform: [{ rotate: "180deg" }],
  },
  badPasswordText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#e10000",
  },
});

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
});

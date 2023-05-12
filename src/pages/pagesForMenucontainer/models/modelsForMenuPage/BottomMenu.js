import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  BackHandler,
} from "react-native";

const BottomMenu = ({ imageSource }) => {
  return (
    <View style={styles.bottomViewIcon}>
      <TouchableOpacity>
        <Image
          source={imageSource}
          style={{
            width: 40,
            height: 40,
            top: 2,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    position: "absolute",
    bottom: 0,
    borderColor: "#000",
    borderTopWidth: 1,
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#bf97ff",
  },
  bottomViewIcon: {
    flex: 1,
    justifyContent: "center",
  },
});

export default BottomMenu;

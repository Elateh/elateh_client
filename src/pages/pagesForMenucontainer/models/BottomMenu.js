import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomMenu = ({
  imageSource,
  isPressed,
  whereToNavigate = "menuScreen",
}) => {
  const navigation = useNavigation();

  if (isPressed) {
    return (
      <View style={styles.bottomViewIcon}>
        <View>
          <Image
            source={imageSource}
            style={{
              width: 40,
              height: 40,
              top: 2,
              alignSelf: "center",
            }}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.bottomViewIcon}>
        <TouchableOpacity onPress={() => navigation.navigate(whereToNavigate)}>
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
  }
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

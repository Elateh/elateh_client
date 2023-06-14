import React from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import getUserData from "../model/getUserData";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();

  getUserData().then((userData) => {
    if (userData !== null) {
      navigation.navigate("menuScreenContainer");
    } else {
      navigation.navigate("registrationScreenContainer");
    }
  });
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeIn"
        iterationCount="infinite"
        style={styles.text}
      >
        Loading...
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default LoadingScreen;

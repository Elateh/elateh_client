import React, { useCallback } from "react";

import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LocalScreenStyles from "./LocalScreenStyles";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const navigateSomeWhere = (where) => {
    navigation.navigate(where);
  };

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Pacifico-Regular": require("../../../assets/fonts/Pacifico-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={{ backgroundColor: "blue" }}></View>;
  }

  return (
    <View style={[GlobalStyle.backgroundOfPages]} onLayout={onLayoutRootView}>
      <View
        style={[
          styles.underleftTopCircle,
          {
            position: "absolute",
            top: "10%",
            left: -65,
          },
        ]}
      >
        <View style={styles.underleftTopCircle}>
          <View style={styles.topOfCircles}></View>
        </View>
      </View>
      <View
        style={[
          styles.underRightCenterCircle,
          { position: "absolute", top: "28%", left: 246 },
        ]}
      >
        <View style={styles.underRightCenterCircle}>
          <View style={styles.topOfCircles}></View>
        </View>
      </View>
      <View
        style={[
          styles.underLeftCenterCircle,
          { position: "absolute", top: "53%", left: 25 },
        ]}
      >
        <View style={[styles.topOfCircles, { elevation: 30 }]}></View>
      </View>
      <View
        style={[
          styles.underRightBottomCircle,
          { position: "absolute", top: "75%", left: 332 },
        ]}
      >
        <View style={styles.topOfCircles}></View>
      </View>
      <View
        style={[
          styles.underCircle,
          { transform: [{ translateY: -175 }], top: "50%" },
        ]}
      >
        <View style={styles.mainCircle}>
          <Text style={styles.textInMainCircle}>Ela.locker</Text>
          <Text style={styles.shadowTextInMainCircle}>Ela.locker</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonInMainiCircle}
          onPress={() => navigateSomeWhere("singInScreen")}
        >
          <Text style={styles.textInButton}>Зареєструватись</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonInMainiCircle}
          onPress={() => navigateSomeWhere("logInScreen")}
        >
          <Text style={styles.textInButton}>Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  underCircle: {
    position: "absolute",
    height: 350,
    width: 365,
    backgroundColor: "rgba(0,0,0,0.0)",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 1000,
    elevation: 20,
    zIndex: 1,
  },
  mainCircle: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#bf97ff",
    alignSelf: "center",
    borderRadius: 1000,
    elevation: 20,
  },
  textInMainCircle: {
    fontSize: 70,
    fontFamily: "Pacifico-Regular",
    alignSelf: "center",
    top: 40,
    color: "#ebdeff",
    zIndex: 2,
  },
  shadowTextInMainCircle: {
    fontSize: 70,
    fontFamily: "Pacifico-Regular",
    alignSelf: "center",
    top: -65,
    color: "#000",
    zIndex: 1,
  },
  buttonInMainiCircle: {
    top: "10%",
    height: 45,
    width: 238,
    borderRadius: 10,
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 12,
    elevation: 30,
    justifyContent: "center",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  textInButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    alignSelf: "center",
  },
  topOfCircles: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    backgroundColor: "#fff",
  },
  underleftTopCircle: {
    width: 154,
    height: 144,
    borderRadius: 1000,
    elevation: 20,
  },
  underRightCenterCircle: {
    height: 113,
    width: 115,
    borderRadius: 1000,
    elevation: 20,
  },
  underLeftCenterCircle: {
    height: 211,
    width: 217,
    borderRadius: 1000,
  },
  underRightBottomCircle: {
    height: 144,
    width: 154,
    borderRadius: 1000,
    elevation: 20,
  },
});

export default RegistrationScreen;

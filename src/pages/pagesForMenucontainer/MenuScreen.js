import React, { useCallback, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BackHandler } from "react-native";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import InsetShadow from "react-native-inset-shadow";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const MenuScreen = () => {
  useEffect(() => {
    const backAction = () => {
      console.log("pressed back");
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  });

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "MarckScript-Regular": require("../../../assets/fonts/MarckScript-Regular.ttf"),
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
    <View
      style={[GlobalStyle.backgroundOfPages, { overflow: "scroll" }]}
      onLayout={onLayoutRootView}
    >
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 40,
              flexDirection: "row",
              justifyContent: "center",
              top: 10,
            }}
          >
            <View style={styles.searchInputView}>
              <InsetShadow
                containerStyle={styles.InsetShadow}
                shadowRadius={20}
                shadowOffset={25}
                elevation={25}
                shadowOpacity={0.5}
                color="rgb(128,128,128)"
                right={false}
                bottom={false}
              >
                <Image
                  source={require("../../../images/searchIcon.png")}
                  style={{
                    width: 29,
                    height: 29,
                    position: "relative",
                    marginRight: 20,
                    left: 10,
                    top: 9,
                  }}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Пошук"
                  placeholderTextColor="#a9a9a9"
                />
              </InsetShadow>
            </View>
            <TouchableOpacity>
              <Image
                source={require("../../../images/userIcon2.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 3,
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>

          {/* First(1) block of Menu ---------------------------------------------------------------------------------*/}
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/PizaImage.png")}
                  style={{ right: 20 }}
                />
              </View>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientNonPair}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksNonPair}>Піца</Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>

            {/* Second(2) block of Menu ---------------------------------------------------------------------------------*/}
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientPair}
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksPair}>Суші</Text>
                </LinearGradient>
              </View>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/SushiImage.png")}
                  style={{ alignSelf: "center", right: 40 }}
                />
              </View>
            </TouchableOpacity>

            {/* Third(3) block of Menu ---------------------------------------------------------------------------------*/}
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/SoupImage.png")}
                  style={{ right: 20 }}
                />
              </View>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientNonPair}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksNonPair}>
                    Перші страви
                  </Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>

            {/* Fourth(4) block of Menu ---------------------------------------------------------------------------------*/}
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientPair}
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksPair}>Другі страви</Text>
                </LinearGradient>
              </View>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/MeatInage.png")}
                  style={{ alignSelf: "center", right: 40 }}
                />
              </View>
            </TouchableOpacity>

            {/* Fifth(5) block of Menu --------------------------------------------------------------------------------- */}
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/FastFoodImage.png")}
                  style={{ right: 20 }}
                />
              </View>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientNonPair}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksNonPair}>Фастфуд</Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>

            {/* Sixth(6) block of Menu ---------------------------------------------------------------------------------*/}
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientPair}
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksPair}>Випічка</Text>
                </LinearGradient>
              </View>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/BackeryImage.png")}
                  style={{ alignSelf: "center", right: 40 }}
                />
              </View>
            </TouchableOpacity>

            {/* Seventh(7) block of Menu ---------------------------------------------------------------------------------*/}
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/SodaImage.png")}
                  style={{ right: 20 }}
                />
              </View>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientNonPair}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksNonPair}>Напої</Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>

            {/* Eightth(8) block of Menu ---------------------------------------------------------------------------------*/}
            <TouchableOpacity style={styles.menuBlocks} activeOpacity={0.4}>
              <View style={styles.blockInMenuBlock}>
                <LinearGradient
                  colors={["#fff", "rgba(0,0,0,0)"]}
                  style={styles.linearGradientPair}
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                >
                  <Text style={styles.textInMenusBlocksPair}>Ласощі </Text>
                </LinearGradient>
              </View>
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../images/CandiesImage.png")}
                  style={{ alignSelf: "center", right: 40 }}
                />
              </View>
            </TouchableOpacity>
            <View style={{ height: 90 }}></View>
          </View>
        </ScrollView>

        <View style={styles.bottomMenu}>
          <View style={styles.bottomViewIcon}>
            <TouchableOpacity>
              <Image
                source={require("../../../images/locationIcon.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 2,
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomViewIcon}>
            <Image
              source={require("../../../images/restaurantMenuIcon.png")}
              style={{
                width: 40,
                height: 40,
                top: 2,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={styles.bottomViewIcon}>
            <TouchableOpacity>
              <Image
                source={require("../../../images/shopIcon.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 2,
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomViewIcon}>
            <TouchableOpacity>
              <Image
                source={require("../../../images/settingsIcon.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 2,
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputView: {
    backgroundColor: "#ffeec1",
    height: 40,
    width: "78%",
    marginLeft: "2%",
    marginRight: "5%",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  inputText: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    top: 1,
    fontStyle: "normal",
    fontVariant: "none",
  },
  InsetShadow: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  menuBlocks: {
    height: 167,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  blockInMenuBlock: {
    height: 135,
    width: 256,
    alignSelf: "center",
  },
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
  linearGradientNonPair: {
    flex: 1,
    borderTopRightRadius: 76,
    borderBottomRightRadius: 76,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 30,
    justifyContent: "center",
  },
  linearGradientPair: {
    flex: 1,
    borderTopLeftRadius: 76,
    borderBottomLeftRadius: 76,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 30,
    justifyContent: "center",
  },
  textInMenusBlocksNonPair: {
    alignSelf: "center",
    fontSize: 55,
    left: 20,
    fontFamily: "MarckScript-Regular",
    color: "#6f5d30",
  },
  textInMenusBlocksPair: {
    alignSelf: "center",
    fontSize: 55,
    right: 20,
    fontFamily: "MarckScript-Regular",
    color: "#6f5d30",
  },
});

export default MenuScreen;

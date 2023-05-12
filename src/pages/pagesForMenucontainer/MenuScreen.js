import React, { useCallback, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from "react-native";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import InsetShadow from "react-native-inset-shadow";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RightSideOfMenuBlock from "./models/modelsForMenuPage/RightSideMenuBlock";
import LeftSideOfMenuBlock from "./models/modelsForMenuPage/LeftSideMenuBlock";
import BottomMenu from "./models/modelsForMenuPage/BottomMenu";

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

          <View style={{ marginTop: 40 }}>
            <LeftSideOfMenuBlock
              text={"Піца"}
              imageSource={require("../../../images/PizaImage.png")}
            />
            <RightSideOfMenuBlock
              text={"Суші"}
              imageSource={require("../../../images/SushiImage.png")}
            />
            <LeftSideOfMenuBlock
              text={"Перші страви"}
              imageSource={require("../../../images/SoupImage.png")}
            />
            <RightSideOfMenuBlock
              text={"Другі страви"}
              imageSource={require("../../../images/MeatInage.png")}
            />
            <LeftSideOfMenuBlock
              text={"Фастфуд"}
              imageSource={require("../../../images/FastFoodImage.png")}
            />
            <RightSideOfMenuBlock
              text={"Випічка"}
              imageSource={require("../../../images/BackeryImage.png")}
            />
            <LeftSideOfMenuBlock
              text={"Напої"}
              imageSource={require("../../../images/SodaImage.png")}
            />
            <RightSideOfMenuBlock
              text={"Ласощі"}
              imageSource={require("../../../images/CandiesImage.png")}
            />
            <View style={{ height: 90 }}></View>
          </View>
        </ScrollView>

        <View style={styles.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../images/locationIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../images/restaurantMenuIcon.png")}
          />
          <BottomMenu imageSource={require("../../../images/shopIcon.png")} />
          <BottomMenu
            imageSource={require("../../../images/settingsIcon.png")}
          />
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
});

export default MenuScreen;

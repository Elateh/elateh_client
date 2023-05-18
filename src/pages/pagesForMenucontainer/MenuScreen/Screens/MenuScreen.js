import React, { useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from "react-native";
import GlobalStyle from "../../../../GlobalStyles/GlobalStyle";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import LocalStyle from "../../styles/LocalStyle";

import RightSideOfMenuBlock from "../models/RightSideMenuBlock";
import LeftSideOfMenuBlock from "../models/LeftSideMenuBlock";
import BottomMenu from "../../models/BottomMenu";
import SearchInput from "../../models/SearchInput";

const MenuScreen = () => {
  const navigation = useNavigation();
  const navigateSomeWhere = (whereToNavigate) => {
    navigation.navigate(whereToNavigate);
  };

  useEffect(() => {
    const backAction = () => {
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  });

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "MarckScript-Regular": require("../../../../../assets/fonts/MarckScript-Regular.ttf"),
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
          <SearchInput />

          <View style={{ marginTop: 40 }}>
            <LeftSideOfMenuBlock
              text={"Піца"}
              imageSource={require("../../../../../images/PizaImage.png")}
              whereToNavigate={"pizaMenuScreenContainer"}
            />
            <RightSideOfMenuBlock
              text={"Суші"}
              imageSource={require("../../../../../images/SushiImage.png")}
            />
            <LeftSideOfMenuBlock
              text={"Перші страви"}
              imageSource={require("../../../../../images/SoupImage.png")}
              whereToNavigate={"pizaMenuScreenContainer"}
            />
            <RightSideOfMenuBlock
              text={"Другі страви"}
              imageSource={require("../../../../../images/MeatInage.png")}
            />
            <LeftSideOfMenuBlock
              text={"Фастфуд"}
              imageSource={require("../../../../../images/FastFoodImage.png")}
              whereToNavigate={"pizaMenuScreenContainer"}
            />
            <RightSideOfMenuBlock
              text={"Випічка"}
              imageSource={require("../../../../../images/BackeryImage.png")}
            />
            <LeftSideOfMenuBlock
              text={"Напої"}
              imageSource={require("../../../../../images/SodaImage.png")}
              whereToNavigate={"pizaMenuScreenContainer"}
            />
            <RightSideOfMenuBlock
              text={"Ласощі"}
              imageSource={require("../../../../../images/CandiesImage.png")}
            />
            <View style={{ height: 90 }}></View>
          </View>
        </ScrollView>

        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../../../images/locationIcon.png")}
          />
          <BottomMenu
            isPressed={true}
            imageSource={require("../../../../../images/PressedRestaurantMenuIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../../images/shopIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../../images/settingsIcon.png")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MenuScreen;

import React, { useCallback, useEffect, useContext } from "react";
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
import LocalStyle from "../../styles/LocalStyle";

import RightSideOfMenuBlock from "../models/RightSideMenuBlock";
import LeftSideOfMenuBlock from "../models/LeftSideMenuBlock";
import BottomMenu from "../../models/BottomMenu";
import SearchInput from "../../models/SearchInput";
import { NotificationContext } from "../../models/NotificationBuyIcon";
import FullBottomMenu from "../../models/FullBottomMenu";

const MenuScreen = () => {
  const { isNotificationVisible, setNotificationVisible } =
    useContext(NotificationContext);

  useEffect(() => {
    const backAction = () => {
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
              whereToNavigate={"sushiMenuScreenContainer"}
            />
            <LeftSideOfMenuBlock
              text={"Перші страви"}
              imageSource={require("../../../../../images/SoupImage.png")}
              whereToNavigate={"firstDishesScreenContainer"}
            />
            <RightSideOfMenuBlock
              text={"Другі страви"}
              imageSource={require("../../../../../images/MeatInage.png")}
              whereToNavigate={"secondDishesMenuScreenContainer"}
            />
            <LeftSideOfMenuBlock
              text={"Фастфуд"}
              imageSource={require("../../../../../images/FastFoodImage.png")}
              whereToNavigate={"fastFoodMenuScreenContainer"}
            />
            <RightSideOfMenuBlock
              text={"Випічка"}
              imageSource={require("../../../../../images/BackeryImage.png")}
              whereToNavigate={"backeryMenuScreenContainer"}
            />
            <LeftSideOfMenuBlock
              text={"Напої"}
              imageSource={require("../../../../../images/SodaImage.png")}
              whereToNavigate={"drinkMenuScreenContainer"}
            />
            <RightSideOfMenuBlock
              text={"Ласощі"}
              imageSource={require("../../../../../images/CandiesImage.png")}
              whereToNavigate={"candyMenuScreenContainer"}
            />
            <View style={{ height: 90 }}></View>
          </View>
        </ScrollView>

        <FullBottomMenu caseOfMenu={2} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MenuScreen;

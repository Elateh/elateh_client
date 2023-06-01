import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
} from "react-native";

import GlobalStyle from "../../../../../GlobalStyles/GlobalStyle";
import LocalStyle from "../../../styles/LocalStyle";
import BottomMenu from "../../../models/BottomMenu";
import SearchInput from "../../../models/SearchInput";
import MenuBlock from "../../../../../model/MenuBlock";
import { NotificationContext } from "../../../models/NotificationBuyIcon";

const PizaMenuScreen = () => {
  const { isNotificationVisible, toggleNotification } =
    useContext(NotificationContext);

  const [] = useFonts({
    "MarckScript-Regular": require("../../../../../../assets/fonts/MarckScript-Regular.ttf"),
  });

  const [arrayOfPizerias, setArrayOfPizerias] = useState([
    {
      pizeriaName: "Леополі",
      imageSource: require("../images/1PizeriaImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
      styleimageUnderImage: {
        alignSelf: "center",
        top: -25,
      },
    },
    {
      pizeriaName: "Domino’s",
      imageSource: require("../images/2PizeriaImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Truffaldino",
      imageSource: require("../images/3PizeriaImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Syrovarnia Lviv",
      imageSource: require("../images/4PizeriaImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Леополі",
      imageSource: require("../images/1PizeriaImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
  ]);
  return (
    <View style={[GlobalStyle.backgroundOfPages]}>
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchInput />
          <View style={{ marginTop: 40 }}>
            <View style={styles.headView}>
              <Image
                source={require("../images/leftRingImage.png")}
                style={{ width: 83, height: 83 }}
              />
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                <Text style={styles.headText}>Піца</Text>
              </View>

              <Image
                source={require("../images/RightRingImage.png")}
                style={{ width: 83, height: 83 }}
              />
            </View>
            <FlatList
              data={arrayOfPizerias}
              renderItem={({ item }) => (
                <MenuBlock
                  typeOfMenu={"Піцерія"}
                  imageSource={item.imageSource}
                  pizeriaName={item.pizeriaName}
                  imageUnderImageSource={item.imageUnderImageSource}
                  styleImageUnderImage={{ alignSelf: "center", top: -25 }}
                />
              )}
            />
            <View style={{ height: 90 }}></View>
          </View>
        </ScrollView>

        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../../../../images/locationIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../../../images/nonPressedRestaurantMenuIcon.png")}
            whereToNavigate="menuScreen"
          />
          <BottomMenu
            imageSource={require("../../../../../../images/shopIcon.png")}
            hasNotification={isNotificationVisible}
          />
          <BottomMenu
            imageSource={require("../../../../../../images/settingsIcon.png")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headView: {
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
  },
  headText: {
    fontFamily: "MarckScript-Regular",
    fontSize: 48,
    alignSelf: "center",
  },
  blockPizeria: {
    alignSelf: "center",
    marginTop: 10,
    height: 270,
    width: "90%",
  },
  underImageBlock: {
    flex: 1,
    zIndex: 1,
  },
  textUnunderImageBlock: {
    fontSize: 22,
    fontWeight: 600,
    alignSelf: "center",
  },

  linearGradient: {
    zIndex: 2,
    height: 165,
    position: "absolute",
    borderTopRightRadius: 56,
    borderBottomRightRadius: 60,
    width: "98.7%",
  },
  navigationIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    top: 68,
    zIndex: 3,
    right: 15,
  },
});

export default PizaMenuScreen;

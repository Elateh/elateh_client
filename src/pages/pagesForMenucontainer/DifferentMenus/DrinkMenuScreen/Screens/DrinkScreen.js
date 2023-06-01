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

const DrinkMenuScreen = () => {
  const { isNotificationVisible, toggleNotification } =
    useContext(NotificationContext);

  const [] = useFonts({
    "MarckScript-Regular": require("../../../../../../assets/fonts/MarckScript-Regular.ttf"),
  });
  const [arrayOfPizerias, setArrayOfPizerias] = useState([
    {
      pizeriaName: "7heaven",
      imageSource: require("../images/1DrinkImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Вероніка",
      imageSource: require("../images/2DrinkImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Фішка",
      imageSource: require("../images/3DrinkImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: `   Піцерія 
“Domino’s”`,
      imageSource: require("../images/4DrinkImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "7heaven",
      imageSource: require("../images/1DrinkImage.png"),
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
                source={require("../images/cubaLibreImage.png")}
                style={{
                  marginLeft: 30,
                  width: 83,
                  height: 83,
                  transform: [{ rotate: "-10deg" }],
                }}
              />
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                <Text style={styles.headText}>Напої</Text>
              </View>

              <Image
                source={require("../images/waterImage.png")}
                style={{
                  marginLeft: 30,
                  width: 83,
                  height: 83,
                  right: 20,
                  transform: [{ rotate: "10deg" }],
                }}
              />
            </View>
            <FlatList
              data={arrayOfPizerias}
              renderItem={({ item }) => (
                <MenuBlock
                  imageSource={item.imageSource}
                  pizeriaName={item.pizeriaName}
                  imageUnderImageSource={item.imageUnderImageSource}
                  styleImageUnderImage={{
                    alignSelf: "center",
                    top: 0,
                    height: 128,
                    width: 285,
                  }}
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

export default DrinkMenuScreen;

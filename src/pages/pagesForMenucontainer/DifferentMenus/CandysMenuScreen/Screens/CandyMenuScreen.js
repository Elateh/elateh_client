import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  FlatList,
} from "react-native";

import GlobalStyle from "../../../../../GlobalStyles/GlobalStyle";
import LocalStyle from "../../../styles/LocalStyle";
import BottomMenu from "../../../models/BottomMenu";
import SearchInput from "../../../models/SearchInput";
import MenuBlock from "../../../models/MenuBlock";
import { NotificationContext } from "../../../models/NotificationBuyIcon";

const CandyMenuScreen = () => {
  const { isNotificationVisible, toggleNotification } =
    useContext(NotificationContext);

  const [] = useFonts({
    "MarckScript-Regular": require("../../../../../../assets/fonts/MarckScript-Regular.ttf"),
  });
  const [arrayOfPizerias, setArrayOfPizerias] = useState([
    {
      pizeriaName: `   Ваш
ЛАВаш`,
      imageSource: require("../images/1CandyImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: `TRUSTPIZZA
& BURGERS`,
      imageSource: require("../images/2CandyImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "ФІШКА",
      imageSource: require("../images/3CandyImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: `Kebab
 Story`,
      imageSource: require("../images/4CandyImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: `   Ваш
ЛАВаш`,
      imageSource: require("../images/1CandyImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
  ]);

  return (
    <View style={[GlobalStyle.backgroundOfPages]}>
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
        <FlatList
          data={arrayOfPizerias}
          ListHeaderComponent={() => (
            <React.Fragment>
              <SearchInput />

              <View style={{ marginTop: 40 }}>
                <View style={styles.headView}>
                  <Image
                    source={require("../images/cupcakeImage.png")}
                    style={{
                      marginLeft: 30,
                      width: 83,
                      height: 83,
                    }}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text style={styles.headText}>Ласощі</Text>
                  </View>

                  <Image
                    source={require("../images/sweetsImage.png")}
                    style={{
                      marginLeft: 30,
                      width: 83,
                      height: 83,
                      right: 20,
                    }}
                  />
                </View>
              </View>
            </React.Fragment>
          )}
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
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 90 }}
        />

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
});

export default CandyMenuScreen;

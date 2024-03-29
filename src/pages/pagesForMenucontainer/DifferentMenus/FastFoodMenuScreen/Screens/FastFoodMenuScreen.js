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
import SearchInput from "../../../models/SearchInput";
import MenuBlock from "../../../models/MenuBlock";
import { NotificationContext } from "../../../models/NotificationBuyIcon";
import FullBottomMenu from "../../../models/FullBottomMenu";

const FastFoodMenuScreen = () => {
  const { isNotificationVisible, toggleNotification } =
    useContext(NotificationContext);

  const [] = useFonts({
    "MarckScript-Regular": require("../../../../../../assets/fonts/MarckScript-Regular.ttf"),
  });
  const [arrayOfPizerias, setArrayOfPizerias] = useState([
    {
      pizeriaName: `   Ваш
ЛАВаш`,
      imageSource: require("../images/1FastFoodImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: `TRUSTPIZZA
& BURGERS`,
      imageSource: require("../images/2FastFoodImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "ФІШКА",
      imageSource: require("../images/3FastFoodImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: `Kebab
 Story`,
      imageSource: require("../images/4FastFoodImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: `   Ваш
ЛАВаш`,
      imageSource: require("../images/1FastFoodImage.png"),
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
                    source={require("../images/tacoImage.png")}
                    style={{
                      marginLeft: 30,
                      width: 83,
                      height: 83,
                      transform: [{ rotate: "45deg" }],
                    }}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text style={styles.headText}>Фастфуд</Text>
                  </View>

                  <Image
                    source={require("../images/kebabImage.png")}
                    style={{ marginLeft: 30, width: 83, height: 83, right: 20 }}
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
                top: -10,
                height: 138,
                width: 285,
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 90 }}
        />

        <FullBottomMenu caseOfMenu={0} />
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

export default FastFoodMenuScreen;

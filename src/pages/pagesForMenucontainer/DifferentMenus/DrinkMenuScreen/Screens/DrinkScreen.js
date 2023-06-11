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
        <FlatList
          data={arrayOfPizerias}
          ListHeaderComponent={() => (
            <React.Fragment>
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

export default DrinkMenuScreen;

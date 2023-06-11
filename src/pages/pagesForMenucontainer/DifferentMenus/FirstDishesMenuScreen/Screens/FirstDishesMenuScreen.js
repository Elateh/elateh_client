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

const FirstDishesMenuScreen = () => {
  const { isNotificationVisible, toggleNotification } =
    useContext(NotificationContext);

  const [] = useFonts({
    "MarckScript-Regular": require("../../../../../../assets/fonts/MarckScript-Regular.ttf"),
  });
  const [arrayOfPizerias, setArrayOfPizerias] = useState([
    {
      pizeriaName: "Ресторація“Бурячок”",
      imageSource: require("../images/1FirstDishesImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Alcapone",
      imageSource: require("../images/2FirstDishesImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Хінкальня",
      imageSource: require("../images/3FirstDishesImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Bukhara",
      imageSource: require("../images/4FirstDishesImage.png"),
      imageUnderImageSource: require("../images/downRingImage.png"),
    },
    {
      pizeriaName: "Ресторація“Бурячок”",
      imageSource: require("../images/1FirstDishesImage.png"),
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
                    source={require("../images/bowlImage.png")}
                    style={{ marginLeft: 30, width: 83, height: 83 }}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text style={styles.headText}>Перші страви</Text>
                  </View>

                  <Image
                    source={require("../images/hotSoupImage.png")}
                    style={{ marginRight: 30, width: 83, height: 83 }}
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
              styleImageUnderImage={{ alignSelf: "center" }}
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

export default FirstDishesMenuScreen;

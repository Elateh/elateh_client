import React, { useState, useContext, useEffect } from "react";
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
import IP from "../../../../../References/IP";

const DrinkMenuScreen = () => {
  const { isNotificationVisible, toggleNotification } =
    useContext(NotificationContext);

  const [arrayOfDrinkShops, setArrayOfDrinkShops] = useState([]);

  const fetchDrinkShops = () => {
    fetch(IP + "/api/cafe", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          console.log("все пришло");
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setArrayOfDrinkShops(data);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        throw error;
      });
  };

  useEffect(() => {
    fetchDrinkShops();
  }, []);

  useFonts({
    "MarckScript-Regular": require("../../../../../../assets/fonts/MarckScript-Regular.ttf"),
  });

  return (
    <View style={[GlobalStyle.backgroundOfPages]}>
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
        <FlatList
          data={arrayOfDrinkShops}
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
              institutionID={item.id}
              institutionName={item.name}
              // imageSource={require("../../../../../../imagesOnServer/fishka_dishes/" +
              // item.picture)}
              imageUnderImageSource={require("../images/downRingImage.png")}
              styleImageUnderImage={{
                alignSelf: "center",
                top: 0,
                height: 128,
                width: 285,
              }}
            />
          )}
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

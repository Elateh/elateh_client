import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
} from "react-native";
import GlobalStyle from "../../../../GlobalStyles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";

const ChangePayScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <View
          style={[
            GlobalStyle.circle,
            {
              top: "50%",
              height: 384,
              width: 392,
              transform: [{ translateY: -192 }],
            },
          ]}
        >
          <Text style={[GlobalStyle.headText, { top: "14%" }]}>
            Способи оплати
          </Text>
          <View style={styles.savedCart}>
            <Text style={styles.textInSavedCart}>Збережені способи оплати</Text>
          </View>
          <View style={styles.addNewCart}>
            <Image
              source={require("../../../../../images/payCardIcon.png")}
              style={{ width: 40, height: 32 }}
            />
            <Text style={styles.textInNewCart}>Додати нову картку</Text>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                top: 2,
                marginRight: 10,
                marginLeft: "auto",
              }}
              onPress={() => {
                navigation.navigate("addNewPaYScreen");
              }}
            >
              <Image
                source={require("../../../../../images/downArrowIconBlack.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[GlobalStyle.goBackArrow, { top: 100 }]}
          onPress={() => navigation.navigate("userScreen")}
        >
          <Image
            source={require("../../../../../images/downArrowIconBlack.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  savedCart: {
    marginTop: "30%",
    alignSelf: "center",
    width: 270,
  },
  textInSavedCart: {
    color: "#4d4d4d",
    fontSize: 20,
  },
  addNewCart: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    width: 270,
  },
  textInNewCart: {
    fontSize: 16,
    fontWeight: 600,
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default ChangePayScreen;

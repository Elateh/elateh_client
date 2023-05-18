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
              height: 373,
              width: 392,
              transform: [{ translateY: -186 }],
            },
          ]}
        >
          <Text style={[GlobalStyle.headText, { top: "14%" }]}>
            Способи оплати
          </Text>
          <View style={styles.savedCart}>
            <Text>Збережені способи оплати</Text>
          </View>
          <View style={styles.addNewCart}>
            <Image />
            <Text>Додати нову картку</Text>
            <TouchableOpacity>
              <Image
                source={require("../../../../../images/downArrowIcon.png")}
                style={{ alignSelf: "center", right: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[GlobalStyle.goBackArrow, { top: 100 }]}
          onPress={() => navigation.navigate("userScreen")}
        >
          <Image source={require("../../../../../images/downArrowIcon.png")} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  savedCart: {
    borderWidth: 1,
    borderColor: "red",
    marginTop: "30%",
    alignSelf: "center",
  },
  textInSavedCart: {
    fontWeight: 200,
    fontSize: 20,
  },
  addNewCart: {
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
  textInNewCart: {
    fontSize: 18,
  },
});

export default ChangePayScreen;

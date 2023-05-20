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
import removeUserData from "../../../../model/removeUserData";

const ConfidentialScreen = () => {
  const navigation = useNavigation();

  const removeAndNavigate = () => {
    removeUserData();
    navigation.navigate("registrationScreenContainer");
  };

  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <View style={[GlobalStyle.circle, { top: 150 }]}>
          <Text style={{ alignSelf: "center" }}>Confidential Screen</Text>
          <TouchableOpacity
            style={{
              borderColor: "red",
              borderWidth: 1,
              height: 100,
              width: 120,
              alignSelf: "center",
              top: 200,
            }}
            onPress={removeAndNavigate}
          >
            <Text>Видалити дані з AsyncContainer</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={GlobalStyle.goBackArrow}
          onPress={() => navigation.navigate("userScreen")}
        >
          <Image source={require("../../../../../images/downArrowIcon.png")} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConfidentialScreen;

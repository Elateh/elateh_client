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

const ConfidentialScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <View style={[GlobalStyle.circle, { top: 150 }]}>
          <Text style={{ alignSelf: "center" }}>Confidential Screen</Text>
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

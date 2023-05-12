import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import LocalScreenStyles from "./LocalScreenStyles";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleRegistration = () => {
    fetch("http://example.com/register", {
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Реєстрація успішна");
        }
      })
      .catch((error) => {
        console.error("Помилка при відправленні даних", error);
      });
    navigation.navigate("menuScreenContainer");
  };

  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <TouchableOpacity
          style={LocalScreenStyles.closeButton}
          onPress={() => navigation.navigate("registrationScreen")}
        >
          <Image
            source={require("../../../images/cancelIcon.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View style={LocalScreenStyles.circle}>
          <Text style={[LocalScreenStyles.headText, { top: "24%" }]}>
            Забули пароль?
          </Text>
          <View
            style={[
              LocalScreenStyles.blockOfTextInput,
              {
                marginTop: "20%",
              },
            ]}
          >
            <Image
              source={require("../../../images/emailIcon.png")}
              style={{
                width: 33,
                height: 33,
                position: "relative",
                top: 10,
                marginRight: 20,
                left: 10,
              }}
            />
            <TextInput
              style={LocalScreenStyles.input}
              placeholder="Адреса ел.пошти"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <TouchableOpacity
            style={[LocalScreenStyles.settupButton, { width: 310, top: "34%" }]}
            onPress={handleRegistration}
          >
            <Text style={LocalScreenStyles.textInSettupButton}>
              Надіслати посилання
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 254,
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignSelf: "center",
    position: "relative",
    top: "5%",
  },
  shadow: {
    borderRadius: 200,
    flex: 1,
  },
});

export default ForgotPasswordScreen;

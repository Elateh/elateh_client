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
import GlobalStyle from "../../../GlobalStyles/GlobalStyle";
import LocalScreenStyles from "../styles/LocalScreenStyles";
import { useNavigation } from "@react-navigation/native";

const LogInScreen = () => {
  const navigation = useNavigation();

  const [isBadPasswordTextVisible, setBadPasswordTextVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    let emailPattern = /[a-z0-9]+@gmail\.com/i;
    if (!emailPattern.test(email)) {
      setBadPasswordTextVisible(true);
    } else {
      fetch("http://127.0.0.1:5000/login-form", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          if (data.success) {
            console.log("Registration successful");
            navigation.navigate("menuScreenContainer");
            setBadPasswordTextVisible(false);
          } else {
            console.log("Registration failed");
            setBadPasswordTextVisible(true);
          }
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          throw error;
        });
    }
  };

  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <TouchableOpacity
          style={LocalScreenStyles.closeButton}
          onPress={() => navigation.navigate("registrationScreen")}
        >
          <Image
            source={require("../../../../images/cancelIcon.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View style={GlobalStyle.circle}>
          <Text style={[GlobalStyle.headText, { top: "14%" }]}>Увійти</Text>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "7%",
              },
            ]}
          >
            <Image
              source={require("../../../../images/emailIcon.png")}
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
              style={GlobalStyle.input}
              placeholder="Адреса ел.пошти"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "7%",
              },
            ]}
          >
            <Image
              source={require("../../../../images/padlockIcon.png")}
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
              style={GlobalStyle.input}
              placeholder="Пароль"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {isBadPasswordTextVisible && (
            <View
              style={{
                height: 16,
                justifyContent: "center",
                flexDirection: "row",
                alignSelf: "center",
                top: 100,
                left: -15,
              }}
            >
              <Image
                source={require("../../../../images/alarmIcon.png")}
                style={{
                  width: 11,
                  height: 10,
                  position: "relative",
                  top: 1,
                  marginRight: 20,
                  left: 10,
                }}
              />
              <Text style={GlobalStyle.badPasswordText}>
                Неправильний пароль або ел.пошта
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={{
              alignSelf: "center",
              position: "relative",
              top: 140,
              height: 20,
              width: 160,
            }}
            onPress={() => navigation.navigate("forgotPasswordScreen")}
          >
            <Text
              style={[
                GlobalStyle.textUnderInput,
                {
                  fontSize: 18,
                },
              ]}
            >
              Забули пароль?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[GlobalStyle.settupButton, { width: 160, top: "36%" }]}
            onPress={handleRegistration}
          >
            <Text style={GlobalStyle.textInSettupButton}>Увійти</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={LocalScreenStyles.buttonUnderCircle}
          onPress={() => navigation.navigate("singInScreen")}
        >
          <Text style={LocalScreenStyles.textUnderCircle}>Зареєструватися</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 200,
    flex: 1,
  },
});

export default LogInScreen;

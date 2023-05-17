import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";
import GlobalStyle from "../../../../GlobalStyles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [textColorOfUnderPassword, setTextColorOfUnderPassword] =
    useState("#723fc6");
  const [badPasswordTextVisible, setBadPasswordTextVisible] = useState(false);

  const [passwordTocheck, setPasswordTocheck] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = () => {
    let isEverythingRight = true;
    if (newPassword.length < 9) {
      isEverythingRight = false;
      setTextColorOfUnderPassword("#e10000");
    } else {
      setTextColorOfUnderPassword("#723fc6");
    }
    if (isEverythingRight) {
      fetch("http://127.0.0.1:5000/login-form", {
        method: "POST",
        body: JSON.stringify({ passwordTocheck, newPassword }),
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
        <View style={[GlobalStyle.circle, { top: 150 }]}>
          <Text style={[GlobalStyle.headText, { top: "14%" }]}>
            Змінити пароль
          </Text>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "7%",
              },
            ]}
          >
            <Image
              source={require("../../../../../images/padlockIcon.png")}
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
              placeholder="Введіть поточний пароль"
              value={passwordTocheck}
              secureTextEntry
              onChangeText={(text) => setPasswordTocheck(text)}
            />
            {badPasswordTextVisible && (
              <View
                style={{
                  position: "absolute",
                  height: 16,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignSelf: "center",
                  top: 50,
                  left: 40,
                }}
              >
                <Text
                  style={[
                    GlobalStyle.textUnderInput,
                    {
                      left: 10,
                      fontSize: 14,
                      color: "#e10000",
                    },
                  ]}
                >
                  Неправильно введено пароль
                </Text>
              </View>
            )}
          </View>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "6%",
              },
            ]}
          >
            <Image
              source={require("../../../../../images/padlockIcon.png")}
              style={{
                width: 30,
                height: 30,
                position: "relative",
                top: 10,
                marginRight: 20,
                left: 10,
              }}
            />
            <TextInput
              style={GlobalStyle.input}
              placeholder="Введіть новий пароль"
              value={newPassword}
              secureTextEntry
              onChangeText={(text) => setNewPassword(text)}
            />
          </View>
          <Text
            key={textColorOfUnderPassword}
            style={[
              GlobalStyle.textUnderInput,
              {
                right: 40,
                marginTop: 100,
                fontSize: 14,
                color: textColorOfUnderPassword,
              },
            ]}
          >
            Не менше 9 символів
          </Text>

          <TouchableOpacity
            style={[GlobalStyle.settupButton, { width: 160, top: "7%" }]}
            onPress={changePassword}
          >
            <Text style={GlobalStyle.textInSettupButton}>Змінити</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.goBackArrow}
          onPress={() => navigation.navigate("userScreen")}
        >
          <Image source={require("../../../../../images/downArrowIcon.png")} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackArrow: {
    marginTop: 80,
    width: 30,
    alignSelf: "center",
    justifyContent: "center",
    transform: [{ rotate: "180deg" }],
  },
});

export default ChangePasswordScreen;

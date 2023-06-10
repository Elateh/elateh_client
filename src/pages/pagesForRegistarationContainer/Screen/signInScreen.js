import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import GlobalStyle from "../../../GlobalStyles/GlobalStyle";
import LocalScreenStyles from "../styles/LocalScreenStyles";
import { useNavigation } from "@react-navigation/native";
import setUserData from "../../../model/setUserData";
import IP from "../../../References/IP";

const SignInScreen = ({}) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isBadEmailTextVisible, setBadEmailTextVisible] = useState(false);
  const [isBadUserNameImageVisible, setBadEmailImageVisible] = useState(false);
  const [isBadPasswordImageVisible, setBadPasswordImageVisible] =
    useState(false);

  const [textColorOfUnderPassword, setTextColorOfUnderPassword] =
    useState("#723fc6");

  const handleRegistration = () => {
    let everythingRight = true;
    const emailPattern = /[a-z0-9]+@gmail\.com/i;
    if (username.length < 1) {
      everythingRight = false;
      setBadEmailImageVisible(true);
    } else {
      setBadEmailImageVisible(false);
    }
    if (!emailPattern.test(email)) {
      setBadEmailTextVisible(true);
      everythingRight = false;
    } else {
      setBadEmailTextVisible(false);
    }
    if (password.length < 9) {
      setTextColorOfUnderPassword("#e10000");
      setBadPasswordImageVisible(true);
      everythingRight = false;
    } else {
      setTextColorOfUnderPassword("#723fc6");
      setBadPasswordImageVisible(false);
    }
    if (everythingRight) {
      fetch(IP + "/api/authentification", {
        method: "POST",
        body: JSON.stringify({ email, username, password }),
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
            setUserData(username, email, password);
            navigation.navigate("menuScreenContainer");
            setBadEmailTextVisible(false);
          } else {
            console.log("Registration failed");
            setBadEmailTextVisible(true);
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
          <Text style={[GlobalStyle.headText, { top: "14%" }]}>
            Зареєструватися
          </Text>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "4%",
              },
            ]}
          >
            <Image
              source={require("../../../../images/userIcon1.png")}
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
              placeholder="Ім'я"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            {isBadUserNameImageVisible && (
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
                <Image
                  source={require("../../../../images/alarmIcon.png")}
                  style={{
                    width: 12,
                    height: 10,
                    position: "relative",
                    top: 1,
                    marginRight: 20,
                    left: 10,
                  }}
                />
                <Text style={[GlobalStyle.badPasswordText]}>
                  Не менше 1 символа
                </Text>
              </View>
            )}
          </View>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "4%",
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
            {isBadEmailTextVisible && (
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
                <Image
                  source={require("../../../../images/alarmIcon.png")}
                  style={{
                    width: 12,
                    height: 10,
                    position: "relative",
                    top: 1,
                    marginRight: 20,
                    left: 10,
                  }}
                />
                <Text style={[GlobalStyle.badPasswordText]}>
                  Неправильно введена ел.пошта
                </Text>
              </View>
            )}
          </View>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "4%",
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
            <View
              style={{
                position: "absolute",
                justifyContent: "center",
                flexDirection: "row",
                alignSelf: "center",
                top: 50,
                left: 50,
              }}
            >
              {isBadPasswordImageVisible && (
                <Image
                  source={require("../../../../images/alarmIcon.png")}
                  style={{
                    width: 12,
                    height: 10,
                    position: "relative",
                    top: 1,
                    marginRight: 10,
                  }}
                />
              )}
              <Text
                style={[
                  GlobalStyle.badPasswordText,
                  {
                    right: "auto",
                    marginRight: 10,
                    height: 14,
                    color: textColorOfUnderPassword,
                  },
                ]}
              >
                Не менше 9 символів
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[GlobalStyle.settupButton, { width: 230, top: "35%" }]}
            onPress={handleRegistration}
          >
            <Text style={GlobalStyle.textInSettupButton}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={LocalScreenStyles.buttonUnderCircle}
          onPress={() => navigation.navigate("logInScreen")}
        >
          <Text style={LocalScreenStyles.textUnderCircle}>Увійти</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default SignInScreen;

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

const SingInScreen = ({}) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isBadEmailTextVisible, setBadEmailTextVisible] = useState(false);
  const [textColorOfUnderPassword, setTextColorOfUnderPassword] =
    useState("#723fc6");

  const handleRegistration = () => {
    let everythingRight = true;
    let emailPattern = /[a-z0-9]+@gmail\.com/i;
    if (!emailPattern.test(email)) {
      setBadEmailTextVisible(true);
      everythingRight = false;
    } else {
      setBadEmailTextVisible(false);
    }
    if (password.length < 9) {
      setTextColorOfUnderPassword("#e10000");
      sizeOfText = 10;
      everythingRight = false;
    } else {
      setTextColorOfUnderPassword("#723fc6");
    }
    if (everythingRight) {
      fetch("https://example.com", {
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
            source={require("../../../images/cancelIcon.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View style={LocalScreenStyles.circle}>
          <Text style={[LocalScreenStyles.headText, { top: "14%" }]}>
            Зареєструватися
          </Text>
          <View
            style={[
              LocalScreenStyles.blockOfTextInput,
              {
                marginTop: "4%",
              },
            ]}
          >
            <Image
              source={require("../../../images/userIcon1.png")}
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
              placeholder="Ім'я"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View
            style={[
              LocalScreenStyles.blockOfTextInput,
              {
                marginTop: "4%",
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
                  source={require("../../../images/alarmIcon.png")}
                  style={{
                    width: 10,
                    height: 10,
                    position: "relative",
                    top: 3,
                    marginRight: 20,
                    left: 10,
                  }}
                />
                <Text style={[styles.badPasswordText]}>
                  Неправильно введена ел.пошта
                </Text>
              </View>
            )}
          </View>
          <View
            style={[
              LocalScreenStyles.blockOfTextInput,
              {
                marginTop: "4%",
              },
            ]}
          >
            <Image
              source={require("../../../images/padlockIcon.png")}
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
              placeholder="Пароль"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Text
            key={textColorOfUnderPassword}
            style={[
              LocalScreenStyles.textUnderInput,
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
            style={[LocalScreenStyles.settupButton, { width: 230 }]}
            onPress={handleRegistration}
          >
            <Text style={LocalScreenStyles.textInSettupButton}>
              Зареєструватися
            </Text>
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
  badPasswordText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#e10000",
  },
});

export default SingInScreen;

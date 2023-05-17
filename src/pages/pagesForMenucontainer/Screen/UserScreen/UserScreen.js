import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import GlobalStyle from "../../../../GlobalStyles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import TextBlock from "./models/TextBlocks";

const UserScreen = () => {
  const [username, setUsername] = useState("Ваше Ім'я та Прізвище");
  const [email, setEmail] = useState("Ваш Email");

  const navigation = useNavigation();

  fetch("https://example.com", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then((data) => {
      console.log(data);
      setUsername(data.username);
      setEmail(data.email);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      throw error;
    });

  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <View style={[GlobalStyle.circle, { top: 150 }]}>
          <TextBlock
            imageSource={require("../../../../../images/userIcon3.png")}
            text={username}
          />
          <TextBlock
            imageSource={require("../../../../../images/emailIcon.png")}
            text={email}
          />
          <TextBlock
            imageSource={require("../../../../../images/padlockIcon.png")}
            text={"Змінити пароль"}
            haveNavigation={true}
            whereNavigate={"changePasswordScreen"}
          />
          <TextBlock
            imageSource={require("../../../../../images/smartphoneIcon.png")}
            text={"Змінити номер телефону"}
            haveNavigation={true}
            whereNavigate={"changeTelephoneNumberScreen"}
          />
          <TextBlock
            imageSource={require("../../../../../images/walletIcon.png")}
            text={"Способи оплати"}
            haveNavigation={true}
            whereNavigate={"changePay"}
          />
          <TextBlock
            imageSource={require("../../../../../images/privacyIcon.png")}
            text={"Конфіденційність"}
            haveNavigation={true}
            whereNavigate={"confidentialScreen"}
          />
        </View>
        <TouchableOpacity
          style={styles.goBackArrow}
          onPress={() => navigation.navigate("menuScreen")}
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

export default UserScreen;

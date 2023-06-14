import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import getUserData from "../../../../model/getUserData";
import GlobalStyle from "../../../../GlobalStyles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import TextBlock from "../models/TextBlocks";

const UserScreen = () => {
  const [username, setUsername] = useState("Ім'я та Прізвище");
  const [email, setEmail] = useState("Електронна пошта");
  const navigation = useNavigation();

  getUserData().then((userData) => {
    if (userData != null) {
      setUsername(userData.username);
      setEmail(userData.email);
    }
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
            whereNavigate={"changePayScreen"}
          />
          <TextBlock
            imageSource={require("../../../../../images/privacyIcon.png")}
            text={"Конфіденційність"}
            haveNavigation={true}
            whereNavigate={"confidentialScreen"}
          />
        </View>
        <TouchableOpacity
          style={GlobalStyle.goBackArrow}
          onPress={() => navigation.navigate("menuScreen")}
        >
          <Image
            source={require("../../../../../images/downArrowIconBlack.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserScreen;

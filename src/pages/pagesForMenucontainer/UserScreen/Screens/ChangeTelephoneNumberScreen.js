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

const ChangeTelephoneNumberScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState("");

  const onChangeNumber = (newNumber) => {
    const numericValue = newNumber.replace(/[^0-9]/g, "");
    setNumber(numericValue);
  };
  const changeNumber = () => {
    let isEverythingRight = true;
    if (number.length === 10) {
      if (isEverythingRight) {
        fetch("http://127.0.0.1:5000/login-form", {
          method: "POST",
          body: JSON.stringify({ number }),
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
              console.log("Change number successful");
            } else {
              console.log("Change number failed");
            }
          })
          .catch((error) => {
            console.error("Error occurred:", error);
            throw error;
          });
      }
    }
  };
  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <View style={[GlobalStyle.circle, { top: 150 }]}>
          <Text style={[GlobalStyle.headText, { top: "14%" }]}>
            Номер телефону
          </Text>
          <View
            style={[
              GlobalStyle.blockOfTextInput,
              {
                marginTop: "10%",
              },
            ]}
          >
            <Image
              source={require("../../../../../images/ukraineIcon.png")}
              style={{
                width: 30,
                height: 30,
                position: "relative",
                top: 10,
                marginRight: 20,
                left: 10,
              }}
            />
            <View
              style={{
                justifyContent: "center",
                marginRight: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 19,
                }}
              >
                +38
              </Text>
            </View>
            <TextInput
              style={GlobalStyle.input}
              value={number}
              placeholder="Ваш номер телефону?"
              maxLength={10}
              keyboardType="numeric"
              onChangeText={onChangeNumber} // Use onChangeText instead of onChange
            />
          </View>
          <Text
            style={[
              GlobalStyle.textUnderInput,
              {
                marginTop: "20%",
                fontSize: 14,
                left: 10,
                color: "#723fc6",
                width: "56%",
              },
            ]}
          >
            Якщо ви хочете змінити номер телефону, вам знадобиться його
            підтвердити.
          </Text>
          <TouchableOpacity
            style={[GlobalStyle.settupButton, { width: 160, top: "15%" }]}
            onPress={changeNumber}
          >
            <Text style={GlobalStyle.textInSettupButton}>Далі</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={GlobalStyle.goBackArrow}
          onPress={() => navigation.navigate("userScreen")}
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

export default ChangeTelephoneNumberScreen;

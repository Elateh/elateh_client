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

const AddNewPaYScreen = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cartDate, setCardDate] = useState("");
  const [CVC, setCVC] = useState("");

  const navigation = useNavigation();
  const onChangeNumber = (newNumber, setState) => {
    const numericValue = newNumber.replace(/[^0-9]/g, "");
    setState(numericValue);
  };

  return (
    <View style={GlobalStyle.backgroundOfPages}>
      <SafeAreaView style={GlobalStyle.safeView}>
        <View style={styles.circle}>
          <View
            style={{
              alignSelf: "flex-end",
              right: "18%",
              top: 80,
              width: 280,
            }}
          >
            <Text
              style={[GlobalStyle.headText]}
            >{`Додати\nплатіжну картку`}</Text>
          </View>
          <View
            style={{
              marginTop: "15%",
              width: 350,
              alignSelf: "flex-end",
              marginRight: 36,
              top: 70,
            }}
          >
            <View
              style={[
                GlobalStyle.blockOfTextInput,
                {
                  top: 0,
                  width: 300,
                  height: 45,
                },
              ]}
            >
              <Image
                source={require("../../../../../images/userIcon1.png")}
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
                placeholder="Ім’я на картці"
                value={cardName}
                onChangeText={setCardName}
              />
            </View>
            <View
              style={[
                GlobalStyle.blockOfTextInput,
                {
                  top: 0,
                  marginTop: "8%",
                  width: 300,
                  height: 45,
                },
              ]}
            >
              <Image
                source={require("../../../../../images/creditCardIcon.png")}
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
                placeholder="хххх хххх хххх хххх"
                keyboardType="phone-pad"
                maxLength={16}
                value={cardNumber}
                onChangeText={(newNumber) =>
                  onChangeNumber(newNumber, setCardNumber)
                }
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={[
                  GlobalStyle.blockOfTextInput,
                  {
                    top: 0,
                    marginTop: "8%",
                    width: 140,
                    height: 45,
                    marginRight: 10,
                  },
                ]}
              >
                <Image
                  source={require("../../../../../images/calendarIcon.png")}
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
                  placeholder="MM/YY"
                  keyboardType="phone-pad"
                  maxLength={4}
                  value={cartDate}
                  onChangeText={(newNumber) =>
                    onChangeNumber(newNumber, setCardDate)
                  }
                />
              </View>
              <View
                style={[
                  GlobalStyle.blockOfTextInput,
                  {
                    top: 0,
                    marginTop: "8%",
                    width: 140,
                    height: 45,
                    marginLeft: 10,
                  },
                ]}
              >
                <Image
                  source={require("../../../../../images/checkIcon.png")}
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
                  placeholder="CVC"
                  keyboardType="phone-pad"
                  maxLength={3}
                  value={CVC}
                  onChangeText={(newNumber) =>
                    onChangeNumber(newNumber, setCVC)
                  }
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              GlobalStyle.settupButton,
              { width: 160, marginTop: "7%", left: 70 },
            ]}
          >
            <Text style={GlobalStyle.textInSettupButton}>Далі</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[GlobalStyle.goBackArrow, { marginTop: "16%", left: 50 }]}
            onPress={() => navigation.navigate("changePayScreen")}
          >
            <Image
              source={require("../../../../../images/downArrowIconBlack.png")}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    alignSelf: "center",
    height: 700,
    width: 720,
    backgroundColor: "#fff",
    borderRadius: 1000,
    right: "40%",
    top: "50%",
    transform: [{ translateY: -350 }],
  },
  savedCart: {
    marginTop: "30%",
    alignSelf: "center",
    width: 270,
  },
  textInSavedCart: {
    color: "#4d4d4d",
    fontSize: 20,
  },
  addNewCart: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    width: 270,
  },
  textInNewCart: {
    fontSize: 16,
    fontWeight: 600,
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default AddNewPaYScreen;

import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InsetShadow from "react-native-inset-shadow";

const SearchInput = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        top: 10,
      }}
    >
      <View style={styles.searchInputView}>
        <InsetShadow
          containerStyle={styles.InsetShadow}
          shadowRadius={20}
          shadowOffset={25}
          elevation={25}
          shadowOpacity={0.5}
          color="rgb(128,128,128)"
          right={false}
          bottom={false}
        >
          <Image
            source={require("../../../../images/searchIcon.png")}
            style={{
              width: 29,
              height: 29,
              position: "relative",
              marginRight: 20,
              left: 10,
              top: 9,
            }}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Пошук"
            placeholderTextColor="#a9a9a9"
          />
        </InsetShadow>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("userScreenContainer")}
      >
        <Image
          source={require("../../../../images/userIcon2.png")}
          style={{
            width: 40,
            height: 40,
            top: 3,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputView: {
    backgroundColor: "#ffeec1",
    height: 40,
    width: "78%",
    marginLeft: "2%",
    marginRight: "5%",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  inputText: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    top: 1,
    fontStyle: "normal",
    fontVariant: "none",
  },
  InsetShadow: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default SearchInput;

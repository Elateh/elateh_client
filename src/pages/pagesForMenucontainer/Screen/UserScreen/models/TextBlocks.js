import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TextBlock = ({ imageSource, text, haveNavigation, whereNavigate }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.blockOfText}>
      <Image
        source={imageSource}
        style={{ width: 30, height: 30, marginRight: 20 }}
      />
      <Text style={styles.textInBlock}>{text}</Text>
      {haveNavigation && (
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate(whereNavigate)}
        >
          <Image
            source={require("../../../../../../images/downArrowIcon.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  blockOfText: {
    top: 70,
    width: "60%",
    height: 32,
    alignSelf: "center",
    position: "relative",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  textInBlock: {
    fontSize: 18,
    alignSelf: "center",
    flex: 1,
    fontWeight: 400,
  },
  navigationButton: {
    width: 40,
    justifyContent: "center",
  },
});

export default TextBlock;

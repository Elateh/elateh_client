import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const LeftSideOfMenuBlock = ({ imageSource, text, whereToNavigate }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.menuBlocks}
      activeOpacity={0.4}
      onPress={() => navigation.navigate(whereToNavigate)}
    >
      <View
        style={{
          flex: 1,
          zIndex: 1,
          justifyContent: "center",
        }}
      >
        <Image source={imageSource} style={{ right: 20 }} />
      </View>
      <View style={styles.blockInMenuBlock}>
        <LinearGradient
          colors={["#fff", "rgba(0,0,0,0)"]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.textInMenusBlocks}>{text}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuBlocks: {
    height: 167,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  blockInMenuBlock: {
    height: 135,
    width: 256,
    alignSelf: "center",
  },
  linearGradient: {
    flex: 1,
    borderTopRightRadius: 76,
    borderBottomRightRadius: 76,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 30,
    justifyContent: "center",
  },
  textInMenusBlocks: {
    alignSelf: "center",
    fontSize: 50,
    width: 160,
    left: 20,
    fontFamily: "MarckScript-Regular",
    color: "#6f5d30",
  },
});

export default LeftSideOfMenuBlock;

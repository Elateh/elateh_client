import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const BlockPizeria = ({
  imageSource,
  whereToNavigate = "menuScreen",
  pizeriaName = "піца",
  imageUnderImageSource,
  styleImageUnderImage,
  typeOfMenu,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.blockPizeria}>
      <View style={{ zIndex: 2 }}>
        <Image
          source={imageSource}
          style={{ alignSelf: "center", zIndex: 1, height: 170 }}
        />
        <TouchableOpacity
          style={styles.navigationIcon}
          onPress={() => navigation.navigate(whereToNavigate)}
        >
          <Image source={require("../../images/downArrowIconLight.png")} />
        </TouchableOpacity>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]}
          style={styles.linearGradient}
          start={{ x: 0.65, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        ></LinearGradient>
      </View>
      <View style={styles.underImageBlock}>
        <Image source={imageUnderImageSource} style={styleImageUnderImage} />
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            width: 100,
          }}
        >
          <Text style={styles.textUnunderImageBlock}>{typeOfMenu}</Text>
          <Text style={styles.textUnunderImageBlock}>{pizeriaName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockPizeria: {
    alignSelf: "center",
    marginTop: 60,
    top: -30,
    height: 270,
    width: "90%",
  },
  underImageBlock: {
    flex: 1,
    zIndex: 1,
  },
  textUnunderImageBlock: {
    fontSize: 22,
    fontWeight: 600,
    alignSelf: "center",
  },

  linearGradient: {
    zIndex: 2,
    height: 165,
    position: "absolute",
    borderTopRightRadius: 60,
    borderBottomRightRadius: 65,
    width: "99.4%",
  },
  navigationIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    top: 68,
    zIndex: 4,
    right: 10,
  },
});

export default BlockPizeria;

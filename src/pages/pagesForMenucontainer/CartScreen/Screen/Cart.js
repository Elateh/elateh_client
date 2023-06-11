import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchInput from "../../models/SearchInput";
import GlobalStyle from "../../../../GlobalStyles/GlobalStyle";
import FullBottomMenu from "../../models/FullBottomMenu";

const Cart = () => {
  return (
    <View style={[GlobalStyle.backgroundOfPages]}>
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
        <FlatList
          ListHeaderComponent={() => (
            <React.Fragment>
              <SearchInput />
              <View style={styles.headView}>
                <TouchableOpacity style={styles.headButton}>
                  <Image
                    source={require("../../../../../images/downArrowIconBlack.png")}
                    style={{
                      width: 30,
                      height: 30,
                      transform: [{ rotate: "180deg" }],
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Text style={styles.headText}>Корзина</Text>
                </View>
                <View style={styles.headButton} />
              </View>
            </React.Fragment>
          )}
        />
        <FullBottomMenu caseOfMenu={3} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  borders: {
    borderColor: "red",
    borderWidth: 1,
  },
  headView: {
    width: "100%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  headText: {
    alignSelf: "center",
    fontSize: 22,
    color: "#4d3c12",
    fontWeight: "700",
  },
  headButton: {
    justifyContent: "center",
    width: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Cart;

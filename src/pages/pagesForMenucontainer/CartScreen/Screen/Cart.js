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
import { useOrders } from "../models/Orders";

const Cart = () => {
  const { addNewOrder, orders, removeExistingOrder, addExistingOrder } =
    useOrders();

  const sumOfPrices = () => {
    let sum = 0;
    orders.forEach((order) => {
      sum += order.price * order.quantity;
    });
    return sum;
  };

  return (
    <View style={[GlobalStyle.backgroundOfPages]}>
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
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
          <TouchableOpacity
            onPress={() =>
              addNewOrder(
                require("../images/FirstImage.png"),
                "Ход-дог молочний",
                80
              )
            }
            style={[styles.headButton, { borderColor: "blue", borderWidth: 1 }]}
          />
        </View>
        <View style={{ marginTop: 20 }} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            padding: 8,
            color: "#4d3c12",
          }}
        >
          Ваше замовлення:
        </Text>
        <View style={{ height: 400 }}>
          <FlatList
            data={orders}
            renderItem={({ item }) => (
              <View style={styles.orderBlock}>
                <Image
                  source={item.image}
                  style={{ width: "100%", position: "absolute", opacity: 0.25 }}
                />
                <View style={[styles.upperBlock, { flex: 1 }]}>
                  <Text
                    style={[styles.upperBlockText, { flex: 1, marginLeft: 25 }]}
                  >
                    {item.text}
                  </Text>
                  <Text style={[styles.upperBlockText, { marginRight: 25 }]}>
                    {item.price} грн
                  </Text>
                </View>
                <View style={[styles.lowerBlock, { flex: 1 }]}>
                  {item.quantity > 1 ? (
                    <TouchableOpacity
                      onPress={() => removeExistingOrder(item.id)}
                      style={{
                        marginLeft: 30,
                        alignSelf: "center",
                      }}
                    >
                      <Image source={require("../images/DeleteIcon.png")} />
                    </TouchableOpacity>
                  ) : (
                    <View
                      style={{
                        marginLeft: 30,
                        alignSelf: "center",
                        opacity: 0.6,
                      }}
                    >
                      <Image source={require("../images/DeleteIcon.png")} />
                    </View>
                  )}
                  <View
                    style={{
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={styles.quantityBlock}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#ffcf55",
                          alignSelf: "center",
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}x
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => addExistingOrder(item.id)}
                    style={{
                      marginRight: 30,
                      alignSelf: "center",
                    }}
                  >
                    <Image source={require("../images/AddIcon.png")} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View
          style={[
            {
              marginTop: 70,
              height: 40,
              width: "100%",
              justifyContent: "center",
              flexDirection: "row",
            },
          ]}
        >
          <Text
            style={[
              styles.upperBlockText,
              { marginLeft: 30, marginRight: "auto", fontSize: 22 },
            ]}
          >
            До оплати :
          </Text>
          <Text
            style={[
              styles.upperBlockText,
              { marginRight: 30, marginLeft: "auto", fontSize: 22 },
            ]}
          >
            {sumOfPrices()} грн
          </Text>
        </View>
        <TouchableOpacity
          style={[
            {
              borderBottomWidth: 0.3,
              borderRightWidth: 0.3,
              borderColor: "#fff",
              marginTop: 10,
              height: 50,
              width: 340,
              alignSelf: "center",
              backgroundColor: "#000",
              borderRadius: 37,
              justifyContent: "center",
              elevation: 8,
            },
          ]}
        >
          <Text
            style={{
              color: "#ffcf55",
              alignSelf: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Оформити замовлення
          </Text>
        </TouchableOpacity>
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
  orderBlock: {
    marginTop: -1,
    width: "101%",
    marginLeft: -1,
    marginRight: -1,
    height: 120,
    borderWidth: 1,
    borderColor: "rgba(77,60,18,0.16)",
  },
  upperBlock: {
    justifyContent: "center",
    flexDirection: "row",
  },
  upperBlockText: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
  lowerBlock: {
    flexDirection: "row",
    justifyContent: "center",
  },
  quantityBlock: {
    width: 30,
    height: 30,
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "#fff",
    borderBottomWidth: 0.4,
    borderRightWidth: 0.4,
    backgroundColor: "#000",
    justifyContent: "center",
  },
});

export default Cart;

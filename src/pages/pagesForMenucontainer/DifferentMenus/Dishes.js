import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import GlobalStyle from "../../../GlobalStyles/GlobalStyle";
import IP from "../../../References/IP";
import SearchInput from "../models/SearchInput";
import FullBottomMenu from "../models/FullBottomMenu";
import { useNavigation } from "@react-navigation/native";
import { useOrders } from "../CartScreen/models/Orders";

const Dishes = ({ route }) => {
  const institutionID = route.params.institutionID;
  const institutionName = route.params.institutionName;
  const [allTypes, setAllTypes] = useState();
  const [allDishes, setAllDishes] = useState([]);
  const [typeIdNow, setTypeIdNow] = useState("1");
  const [downArrowRoateDegrees, setDownArrowRoateDegrees] = useState("90deg");
  const [isOpenModul, setModul] = useState(false);
  const navigation = useNavigation();
  const { addNewOrder, orders } = useOrders();

  const fetchDish = () => {
    fetch(`${IP}/api/cafe/${institutionID}/dishes`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        const updatedDishes = data.map((dish) => ({
          ...dish,
          isChoosen: false,
        }));
        setAllDishes(updatedDishes);
      })
      .then(() => {
        console.log(orders);
        // checkForChoosenDishes();
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        throw error;
      });
  };

  const changeTypeById = (typeId) => {
    setTypeIdNow(typeId);
    onPressDownArrow();
  };

  const fetchTypes = () => {
    return new Promise((resolve, reject) => {
      fetch(`${IP}/api/cafe/${institutionID}/types`, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          setAllTypes(data);
          resolve(data);
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          reject(error);
        });
    });
  };

  const getTextTypeById = (id) => {
    if (allTypes) {
      const result = allTypes.find((type) => type.id === id);
      return result?.name ?? "";
    }
    return "";
  };

  const getAllDishesByTypeId = (typeId) => {
    return allDishes.filter((dish) => dish.typeId === typeId);
  };

  const onPressToChooseOrderByDish = (dish) => {
    if (!dish.isChoosen) {
      addNewOrder(dish);
    }
    dish.isChoosen = !dish.isChoosen;
  };

  const onPressDownArrow = () => {
    if (isOpenModul) {
      setDownArrowRoateDegrees("90deg");
      setModul(false);
    } else {
      setDownArrowRoateDegrees("-90deg");
      setModul(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const types = await fetchTypes();
        setTypeIdNow(types[0].id);
        fetchDish();
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchData();
  }, []);

  console.log(allDishes);
  return (
    <View style={[GlobalStyle.backgroundOfPages]}>
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
        <SearchInput />
        <View style={styles.headView}>
          <TouchableOpacity
            style={styles.headButton}
            onPress={() => navigation.navigate("menuScreen")}
          >
            <Image
              source={require("../../../../images/downArrowIconBlack.png")}
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
            <Text style={styles.headText}>{institutionName}</Text>
          </View>
          <View style={styles.headButton} />
        </View>
        <View style={{ zIndex: 2 }}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 17,
              fontWeight: 500,
              color: "#4d3c12",
            }}
          >
            {getTextTypeById(typeIdNow)}
          </Text>
          <TouchableOpacity
            style={{ width: 40, alignSelf: "center" }}
            onPress={onPressDownArrow}
          >
            <Image
              source={require("../../../../images/downArrowIconBlack.png")}
              style={{
                alignSelf: "center",
                transform: [{ rotate: downArrowRoateDegrees }],
              }}
            />
          </TouchableOpacity>
          {isOpenModul && (
            <View
              style={{
                width: 220,
                alignSelf: "center",
                position: "absolute",
                marginTop: 50,
                borderRadius: 10,
                backgroundColor: "rgba(0, 0, 0, 0.72)",
                padding: 10,
              }}
            >
              <FlatList
                data={allTypes}
                renderItem={({ item }) => (
                  <React.Fragment>
                    {item.id === typeIdNow ? (
                      <View style={[{ marginTop: 10, marginBottom: 10 }]}>
                        <Text
                          style={{
                            alignSelf: "center",
                            fontSize: 25,
                            fontWeight: 500,
                            color: "#ffcf55",
                          }}
                        >
                          {item.name}
                        </Text>
                        <View
                          style={{
                            top: 6,
                            backgroundColor: "#ffcf55",
                            height: 1.5,
                            width: 140,
                            alignSelf: "center",
                          }}
                        />
                      </View>
                    ) : (
                      <TouchableOpacity
                        style={[{ marginTop: 10, marginBottom: 10 }]}
                        onPress={() => changeTypeById(item.id)}
                      >
                        <Text
                          style={{
                            alignSelf: "center",
                            fontSize: 25,
                            fontWeight: 500,
                            color: "#ffcf55",
                          }}
                        >
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </React.Fragment>
                )}
              />
            </View>
          )}
        </View>
        <View style={{ zIndex: 1 }}>
          <FlatList
            data={getAllDishesByTypeId(typeIdNow)}
            renderItem={(item) => (
              <React.Fragment>
                <View
                  style={[
                    {
                      height: 110,
                      zIndex: 1,
                      justifyContent: "center",
                      flexDirection: "row",
                      marginBottom: 25,
                    },
                  ]}
                >
                  <View style={[styles.leftViewOfOrder]}></View>
                  <View style={[styles.rightViewOfOrder]}>
                    <View style={[styles.upperViewOfRightViewOfOrder]}>
                      <Text
                        style={{
                          fontSize: 18,
                          padding: 3,
                          marginBottom: 0,
                          fontWeight: 600,
                          marginTop: "auto",
                        }}
                      >
                        {item.item.name}
                      </Text>
                    </View>
                    <View style={[styles.lowerViewOfRightViewOfOrder]}>
                      <View style={[{ width: 80, justifyContent: "center" }]}>
                        <View
                          style={{
                            backgroundColor: "#000",
                            height: 30,
                            width: 75,
                            borderRadius: 10,
                            alignSelf: "center",
                            borderColor: "#fff",
                            borderBottomWidth: 0.4,
                            borderRightWidth: 0.4,
                            elevation: 6,
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#ffcf55",
                              alignSelf: "center",
                              fontSize: 17,
                              fontWeight: 600,
                            }}
                          >
                            {item.item.price} грн
                          </Text>
                        </View>
                      </View>
                      <View style={[{ flex: 1, justifyContent: "center" }]}>
                        {item.item.isChoosen ? (
                          <View style={{ width: 26, marginLeft: 5 }}>
                            <Image
                              source={require("../../../../images/choosenIcon.png")}
                              style={{ width: 26, height: 26 }}
                            />
                          </View>
                        ) : (
                          <TouchableOpacity
                            onPress={() =>
                              onPressToChooseOrderByDish(item.item)
                            }
                            style={{ width: 26, marginLeft: 5 }}
                          >
                            <Image
                              source={require("../../../../images/AddIcon.png")}
                              style={{ width: 26, height: 26 }}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "rgba(77, 60, 18, 0.16)",
                    height: 1,
                  }}
                />
              </React.Fragment>
            )}
          />
        </View>
        <FullBottomMenu caseOfMenu={0} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  borders: { borderColor: "red", borderWidth: 1 },
  headView: {
    width: "100%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    zIndex: 2,
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
  leftViewOfOrder: {
    width: 120,
    marginLeft: 0,
    marginRight: "auto",
  },
  rightViewOfOrder: {
    flex: 1,
  },
  upperViewOfRightViewOfOrder: {
    flex: 1,
  },

  lowerViewOfRightViewOfOrder: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Dishes;

// даю orders и allDishes и получаю allDishes с измененным isChoosen

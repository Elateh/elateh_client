import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyle from "../../../GlobalStyles/GlobalStyle";
import IP from "../../../References/IP";

const Dishes = ({ route }) => {
  const cafeID = route.params.cafeID;
  const [allTypes, setAllTypes] = useState();
  const [allDishes, setAllDishes] = useState([]);

  const fetchDish = (typeID) => {
    fetch(`${IP}/api/cafe/${cafeID}/${typeID}/dishes`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          console.log("все пришло");
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setAllDishes((prevDishes) => [...prevDishes, data]);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        throw error;
      });
  };

  const fetchTypes = () => {
    return new Promise((resolve, reject) => {
      fetch(`${IP}/api/cafe/${cafeID}/types`, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            console.log("все пришло");
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

  useEffect(() => {
    fetchTypes()
      .then((result) => {
        result.forEach((element) => {
          fetchDish(element.id);
        });
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }, []);

  console.log(allDishes);
  return (
    <View style={[GlobalStyle.backgroundOfPages]}>
      <SafeAreaView style={[GlobalStyle.safeView, { flex: 1 }]}>
        <Text>yeee</Text>
      </SafeAreaView>
    </View>
  );
};

export default Dishes;

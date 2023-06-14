import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const retrieveOrders = async () => {
      try {
        const storedOrders = await AsyncStorage.getItem("orders");
        if (storedOrders !== null) {
          setOrders(JSON.parse(storedOrders));
        }
      } catch (error) {
        console.log(error);
      }
    };

    retrieveOrders();
  }, []);

  useEffect(() => {
    const saveOrders = async () => {
      try {
        await AsyncStorage.setItem("orders", JSON.stringify(orders));
      } catch (error) {
        console.log(error);
      }
    };

    saveOrders();
  }, [orders]);

  const addNewOrder = (item) => {
    const orderExists = orders.find(
      (order) =>
        order.id === item.id &&
        order.typeId === item.typeId &&
        order.institutionID === item.institutionID
    );

    if (!orderExists) {
      setOrders((prevOrders) => [
        ...prevOrders,
        {
          id: item.id,
          institutionID: item.institutionID,
          typeId: item.typeId,
          image: item.picture,
          text: item.name,
          price: item.price,
          quantity: 1,
        },
      ]);
    }
  };

  const removeOrder = ({ orderId }) => {
    console.log(orders);
    console.log("-----" + orderId);
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const addExistingOrder = ({ orderId, orderTypeId, institutionID }) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId &&
        order.typeId === orderTypeId &&
        order.institutionID === institutionID
          ? { ...order, quantity: order.quantity + 1 }
          : order
      )
    );
  };

  const removeExistingOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, quantity: order.quantity - 1 }
          : order
      )
    );
  };

  return {
    orders,
    addNewOrder,
    removeOrder,
    addExistingOrder,
    removeExistingOrder,
  };
};

//даю orders и order получаю boolean

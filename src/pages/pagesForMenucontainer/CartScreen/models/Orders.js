import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    // Retrieve orders from AsyncStorage
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

  const addNewOrder = (image, text, price) => {
    setOrders((prevOrders) => [
      ...prevOrders,
      { id, image, text, price, quantity: 1 },
    ]);
    setId((prevId) => prevId + 1);
    console.log(orders);
  };

  const removeOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const addExistingOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
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

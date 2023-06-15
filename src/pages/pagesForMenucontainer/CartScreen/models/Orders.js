import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IP from "../../../../References/IP";

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

  const addFetch = (order) => {
    fetch(IP + "/api/order/add_order", {
      method: "POST",
      body: JSON.stringify({ orders, order }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setOrders(data.orders);
      });
  };

  const removeFetch = (order) => {
    fetch(IP + "/api/order/remove_order", {
      method: "POST",
      body: JSON.stringify({ orders, order }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setOrders(data.orders);
      });
  };

  const addNewOrder = (item) => {
    const orderExists = orders.find(
      (order) =>
        order.id === item.id &&
        order.typeId === item.typeId &&
        order.institutionID === item.institutionID
    );

    if (!orderExists) {
      setOrders((prevOrders) => [...prevOrders, item]);
    }
  };

  const removeOrder = ({ orderId }) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const addExistingOrder = (order) => {
    addFetch(order);
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
    addFetch,
    removeFetch,
  };
};

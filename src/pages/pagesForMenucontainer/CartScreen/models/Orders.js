import React, { useState } from "react";

const MyComponent = () => {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState(0);

  const addNewOrder = (image, text, price) => {
    setOrders((prevOrders) => [
      ...prevOrders,
      { id, image, text, price, quantity: 1 },
    ]);
    setId((prevId) => prevId + 1);
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
};

export default MyComponent;

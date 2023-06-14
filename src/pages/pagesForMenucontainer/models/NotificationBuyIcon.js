import React, { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    if (numberOfOrders > 0) {
      setNotificationVisible(true);
    } else {
      setNotificationVisible(false);
    }
  }, [numberOfOrders]);

  const addOrder = () => {
    setNumberOfOrders((prevCount) => prevCount + 1);
  };

  const removeOrder = () => {
    if (numberOfOrders !== 0) {
      setNumberOfOrders((prevCount) => prevCount - 1);
    }
  };

  const toggleNotification = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  return (
    <NotificationContext.Provider
      value={{
        isNotificationVisible,
        toggleNotification,
        addOrder,
        removeOrder,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

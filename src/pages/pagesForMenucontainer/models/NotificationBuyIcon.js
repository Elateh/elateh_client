import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const toggleNotification = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  return (
    <NotificationContext.Provider
      value={{ isNotificationVisible, toggleNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

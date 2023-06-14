import React, { useContext } from "react";
import { View } from "react-native";
import { NotificationContext } from "./NotificationBuyIcon";

import LocalStyle from "../styles/LocalStyle";
import BottomMenu from "./BottomMenu";

export default FullBottomMenu = ({ caseOfMenu }) => {
  const { isNotificationVisible, setNotificationVisible } =
    useContext(NotificationContext);

  switch (caseOfMenu) {
    case 0:
      return (
        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../../images/NonPressedLocationIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedRestaurantMenuIcon.png")}
            whereToNavigate="menuScreen"
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedShopIcon.png")}
            whereToNavigate="cartScreenContainer"
            hasNotification={isNotificationVisible}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedSettingsIcon.png")}
          />
        </View>
      );
    case 1:
      return (
        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            isPressed={true}
            imageSource={require("../../../../images/NonPressedLocationIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedRestaurantMenuIcon.png")}
            whereToNavigate="menuScreen"
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedShopIcon.png")}
            whereToNavigate="cartScreenContainer"
            hasNotification={isNotificationVisible}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedSettingsIcon.png")}
          />
        </View>
      );
    case 2:
      return (
        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../../images/NonPressedLocationIcon.png")}
          />
          <BottomMenu
            isPressed={true}
            imageSource={require("../../../../images/PressedRestaurantMenuIcon.png")}
            whereToNavigate="menuScreen"
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedShopIcon.png")}
            whereToNavigate="cartScreenContainer"
            hasNotification={isNotificationVisible}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedSettingsIcon.png")}
          />
        </View>
      );
    case 3:
      return (
        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../../images/NonPressedLocationIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedRestaurantMenuIcon.png")}
            whereToNavigate="menuScreen"
          />
          <BottomMenu
            isPressed={true}
            imageSource={require("../../../../images/PressedShopIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedSettingsIcon.png")}
          />
        </View>
      );
    case 4:
      return (
        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../../images/NonPressedLocationIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedRestaurantMenuIcon.png")}
            whereToNavigate="menuScreen"
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedShopIcon.png")}
            whereToNavigate="cartScreenContainer"
            hasNotification={isNotificationVisible}
          />
          <BottomMenu
            isPressed={true}
            imageSource={require("../../../../images/NonPressedSettingsIcon.png")}
          />
        </View>
      );
    default:
      console.log("There is no such case in FullBottomMenu");
      return (
        <View style={LocalStyle.bottomMenu}>
          <BottomMenu
            imageSource={require("../../../../images/NonPressedLocationIcon.png")}
            whereToNavigate="menuScreen"
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedRestaurantMenuIcon.png")}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedShopIcon.png")}
            whereToNavigate="cartScreenContainer"
            hasNotification={isNotificationVisible}
          />
          <BottomMenu
            imageSource={require("../../../../images/NonPressedSettingsIcon.png")}
          />
        </View>
      );
  }
};

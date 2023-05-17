import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import MenuScreen from "../pages/pagesForMenucontainer/Screen/MenuScreen/MenuScreen";
import UserScreen from "../pages/pagesForMenucontainer/Screen/UserScreen/UserScreen";
import ChangePasswordScreen from "../pages/pagesForMenucontainer/Screen/UserScreen/ChangePasswordScreen";
import ChangeTelephoneNumberScreen from "../pages/pagesForMenucontainer/Screen/UserScreen/ChangeTelephoneNumberScreen";
import ChangePay from "../pages/pagesForMenucontainer/Screen/UserScreen/ChangePayScreen";
import ConfidentialScreen from "../pages/pagesForMenucontainer/Screen/UserScreen/ConfidentialScreen";

const MenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="menuScreen" component={MenuScreen} />
      <Stack.Screen name="userScreen" component={UserScreen} />
      <Stack.Screen
        name="changePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        name="changeTelephoneNumberScreen"
        component={ChangeTelephoneNumberScreen}
      />
      <Stack.Screen name="changePay" component={ChangePay} />

      <Stack.Screen name="confidentialScreen" component={ConfidentialScreen} />
    </Stack.Navigator>
  );
};

export default MenuScreenContainer;

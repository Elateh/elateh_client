import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import MenuScreen from "../pages/pagesForMenucontainer/MenuScreen";

const MenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="menuScreen" component={MenuScreen} />
    </Stack.Navigator>
  );
};

export default MenuScreenContainer;

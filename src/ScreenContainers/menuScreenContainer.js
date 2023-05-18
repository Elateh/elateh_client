import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import MenuScreen from "../pages/pagesForMenucontainer/MenuScreen/Screens/MenuScreen";
import UserScreenContainer from "../pages/pagesForMenucontainer/UserScreen/containers/UserScreenContainer";
import PizaMenuScreenContainer from "../pages/pagesForMenucontainer/PizaMenuScreen/containers/PizaMenuContainer";

const MenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="menuScreen" component={MenuScreen} />
      <Stack.Screen
        name="userScreenContainer"
        component={UserScreenContainer}
      />
      <Stack.Screen
        name="pizaMenuScreenContainer"
        component={PizaMenuScreenContainer}
      />
    </Stack.Navigator>
  );
};

export default MenuScreenContainer;

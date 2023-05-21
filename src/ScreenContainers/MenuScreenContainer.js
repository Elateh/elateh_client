import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import MenuScreen from "../pages/pagesForMenucontainer/MenuScreen/Screens/MenuScreen";
import UserScreenContainer from "../pages/pagesForMenucontainer/UserScreen/containers/UserScreenContainer";
import PizaMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/PizaMenuScreen/containers/PizaMenuContainer";
import SushiMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/SushiMenuScreen/containers/SushiMenuScreenContainer";
import FirstDishesScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/FirstDishesMenuScreen/containers/FirstDishesMenuContainer";
import SecondDishesMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/SecondDishesMenuScreen/containers/SecondDishesMenuContainer";

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
      <Stack.Screen
        name="sushiMenuScreenContainer"
        component={SushiMenuScreenContainer}
      />
      <Stack.Screen
        name="firstDishesScreenContainer"
        component={FirstDishesScreenContainer}
      />
      <Stack.Screen
        name="secondDishesMenuScreenContainer"
        component={SecondDishesMenuScreenContainer}
      />
    </Stack.Navigator>
  );
};

export default MenuScreenContainer;

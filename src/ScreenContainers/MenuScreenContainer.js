import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import MenuScreen from "../pages/pagesForMenucontainer/MenuScreen/Screens/MenuScreen";
import UserScreenContainer from "../pages/pagesForMenucontainer/UserScreen/containers/UserScreenContainer";
import PizaMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/PizaMenuScreen/containers/PizaMenuContainer";
import SushiMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/SushiMenuScreen/containers/SushiMenuScreenContainer";
import FirstDishesScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/FirstDishesMenuScreen/containers/FirstDishesMenuContainer";
import SecondDishesMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/SecondDishesMenuScreen/containers/SecondDishesMenuContainer";
import FastFoodMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/FastFoodMenuScreen/Screens/FastFoodMenuScreen";
import BackeryMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/BackeryMenuScreen/Screens/BackeryMenuScreen";
import DrinkMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/DrinkMenuScreen/Screens/DrinkScreen";
import CandyMenuScreenContainer from "../pages/pagesForMenucontainer/DifferentMenus/CandysMenuScreen/containers/CandyMenuContainer";
import { NotificationProvider } from "../pages/pagesForMenucontainer/models/NotificationBuyIcon";

const MenuScreenContainer = () => {
  return (
    <NotificationProvider>
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
        <Stack.Screen
          name="fastFoodMenuScreenContainer"
          component={FastFoodMenuScreenContainer}
        />
        <Stack.Screen
          name="backeryMenuScreenContainer"
          component={BackeryMenuScreenContainer}
        />
        <Stack.Screen
          name="drinkMenuScreenContainer"
          component={DrinkMenuScreenContainer}
        />
        <Stack.Screen
          name="candyMenuScreenContainer"
          component={CandyMenuScreenContainer}
        />
      </Stack.Navigator>
    </NotificationProvider>
  );
};

export default MenuScreenContainer;

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DrinkMenuScreen from "../Screens/DrinkScreen";
import DishesScreen from "../Screens/DishesScreen";

const Stack = createStackNavigator();

const DrinkMenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="drinkMenuScreen" component={DrinkMenuScreen} />
    </Stack.Navigator>
  );
};

export default DrinkMenuScreenContainer;

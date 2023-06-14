import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import SecondDishesMenuScreen from "../Screens/SecondDishesMenuScreen";

const SecondDishesMenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="secondDishesMenuScreen"
        component={SecondDishesMenuScreen}
      />
    </Stack.Navigator>
  );
};

export default SecondDishesMenuScreenContainer;

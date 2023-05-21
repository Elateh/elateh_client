import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import FirstDishesMenuScreen from "../Screens/FirstDishesMenuScreen";

const FirstDishesMenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="firstDishesMenuScreen"
        component={FirstDishesMenuScreen}
      />
    </Stack.Navigator>
  );
};

export default FirstDishesMenuScreenContainer;

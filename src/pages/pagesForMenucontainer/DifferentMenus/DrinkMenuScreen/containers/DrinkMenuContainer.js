import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import DrinkMenuScreen from "../Screens/DrinkScreen";

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

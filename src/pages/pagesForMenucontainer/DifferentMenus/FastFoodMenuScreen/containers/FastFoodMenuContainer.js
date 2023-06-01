import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import FastFoodMenuScreen from "../Screens/FastFoodMenuScreen";

const FastFoodMenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="fastFoodMenuScreen" component={FastFoodMenuScreen} />
    </Stack.Navigator>
  );
};

export default FastFoodMenuScreenContainer;

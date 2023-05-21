import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import SushiMenuScreen from "../Screens/SushiMenuScreen";

const SushiMenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="sushiMenuScreen" component={SushiMenuScreen} />
    </Stack.Navigator>
  );
};

export default SushiMenuScreenContainer;

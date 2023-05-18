import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import PizaMenuScreen from "../Screens/PizaMenuScreen";

const PizaMenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="pizaMenuScreen" component={PizaMenuScreen} />
    </Stack.Navigator>
  );
};

export default PizaMenuScreenContainer;

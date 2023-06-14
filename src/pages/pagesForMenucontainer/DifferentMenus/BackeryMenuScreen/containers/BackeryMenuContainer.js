import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import BackeryMenuScreen from "../Screens/BackeryMenuScreen";

const BackeryMenuScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="backeryMenuScreen" component={BackeryMenuScreen} />
    </Stack.Navigator>
  );
};

export default BackeryMenuScreenContainer;

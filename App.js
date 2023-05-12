import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RegistrationScreenContainer from "./src/ScreenContainers/registrationScreenContainer";
import MenuScreenContainer from "./src/ScreenContainers/menuScreenContainer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen
          name="registrationScreenContainer"
          component={RegistrationScreenContainer}
        />

        <Stack.Screen
          name="menuScreenContainer"
          component={MenuScreenContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

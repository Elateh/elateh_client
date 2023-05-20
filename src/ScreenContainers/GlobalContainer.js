import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreenContainer from "./RegistrationScreenContainer";
import MenuScreenContainer from "./MenuScreenContainer";
import LoadingScreen from "../model/loadingScreen";

const Stack = createStackNavigator();

const GlobalContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="loadingScreen" component={LoadingScreen} />
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
};
export default GlobalContainer;

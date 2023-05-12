import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../pages/pagesForRegistarationContainer/registrationScreen";
import React from "react";
import SingInScreen from "../pages/pagesForRegistarationContainer/singInScreen";
import LogInScreen from "../pages/pagesForRegistarationContainer/logInScreen";
import ForogotPasswordScreen from "../pages/pagesForRegistarationContainer/forgotPasswordScreen";
const Stack = createStackNavigator();

const RegistrationScreenContainer = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="registrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="singInScreen" component={SingInScreen} />
      <Stack.Screen name="logInScreen" component={LogInScreen} />
      <Stack.Screen
        name="forgotPasswordScreen"
        component={ForogotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default RegistrationScreenContainer;

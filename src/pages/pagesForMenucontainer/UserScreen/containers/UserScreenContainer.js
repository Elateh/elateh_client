import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import UserScreen from "../Screens/UserScreen";
import ChangePasswordScreen from "../Screens/ChangePasswordScreen";
import ChangePayScreen from "../Screens/ChangePayScreen";
import ChangeTelephoneNumberScreen from "../Screens/ChangeTelephoneNumberScreen";
import ConfidentialScreen from "../Screens/ConfidentialScreen";
import AddNewPaYScreen from "../Screens/AddNewPayScreen";

const UserScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="userScreen" component={UserScreen} />
      <Stack.Screen
        name="changePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="changePayScreen" component={ChangePayScreen} />
      <Stack.Screen
        name="changeTelephoneNumberScreen"
        component={ChangeTelephoneNumberScreen}
      />
      <Stack.Screen name="confidentialScreen" component={ConfidentialScreen} />
      <Stack.Screen name="addNewPaYScreen" component={AddNewPaYScreen} />
    </Stack.Navigator>
  );
};

export default UserScreenContainer;

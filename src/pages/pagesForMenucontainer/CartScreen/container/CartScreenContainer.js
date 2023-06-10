import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import Cart from "../Screen/Cart";

const CartScreenContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartScreenContainer;

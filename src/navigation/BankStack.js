import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BanksScreen from "../screen/bank";

const BankStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BanksScreen"
        component={BanksScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BankStack;

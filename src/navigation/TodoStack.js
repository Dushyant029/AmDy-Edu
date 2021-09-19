import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TodoScreen from "../screen/todo";

const TodoStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TodoStack;

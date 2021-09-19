import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/home";
import CoursesScreen from "../screen/home/Courses";
import CourseReactDetailScreen from "../screen/home/CourseReactDetail";
import CourseJsDetailScreen from "../screen/home/CourseJsDetail";
import CourseVideoScreen from "../screen/home/CourseVideo";

const HomeStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoursesScreen"
        component={CoursesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseReactDetailScreen"
        component={CourseReactDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseJsDetailScreen"
        component={CourseJsDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseVideoScreen"
        component={CourseVideoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

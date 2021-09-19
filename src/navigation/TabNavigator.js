import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import TodoStack from "./TodoStack";
import BankStack from "./BankStack";
import ProfileStack from "./ProfileStack";

const TabNavigator = ({ params }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Course",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/course-active.png")
                  : require("../../assets/images/course.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Todo"
        component={TodoStack}
        options={{
          tabBarLabel: "Todo",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/todo-active.png")
                  : require("../../assets/images/todo.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={BankStack}
        options={{
          tabBarLabel: "Bank",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/bank-active.png")
                  : require("../../assets/images/bank.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/prof-active.png")
                  : require("../../assets/images/prof.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

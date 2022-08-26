import React from "react";

import home from "./home";
import { Icon } from "react-native-elements";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import settings from "./settings";
import payment from "./payment";

const Tab = createBottomTabNavigator();

export default function bottomTabs() {
  return (
    <Tab.Navigator showLabel={false} screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="home"
        component={home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" type="material" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" type="material" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="payment"
        component={payment}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="shopping-cart"
              type="material"
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

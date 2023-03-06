import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const ButtonTabNavigator = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <ButtonTabNavigator.Navigator>
      <ButtonTabNavigator.Screen name="Home" component={HomeScreen} />
      <ButtonTabNavigator.Screen name="Settings" component={SettingsScreen} />
    </ButtonTabNavigator.Navigator>
  );
}

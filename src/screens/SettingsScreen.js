import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

export default function SettingsScreen({ navigation }) {
  const { navigate } = navigation;
  const goToHome = () => {
    navigate("Home");
  };
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button title="Go to Home" onPress={goToHome} />
    </View>
  );
}

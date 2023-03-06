import { View, Text, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={goToSettings} />
    </View>
  );
}

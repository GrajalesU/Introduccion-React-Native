import { Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={goToSettings} />
    </SafeAreaView>
  );
}

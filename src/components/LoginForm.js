import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View>
      <Text>Login Form Example</Text>
      <TextInput placeholder="user" />
      <TextInput placeholder="password" />
      <Button
        title="Send"
        onPress={() => {
          console.log("enviado");
        }}
      />
    </View>
  );
}

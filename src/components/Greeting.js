import { View, Text } from "react-native";
import React from "react";

export default function Greeting({ name }) {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: "User",
};

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm.js";
import Greeting from "./src/components/Greeting.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <LoginForm />
      <Greeting name={"Carlos"} />
      <Greeting />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

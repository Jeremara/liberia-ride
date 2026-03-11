import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DriverNavigator from "./src/navigation/DriverNavigator";
import { useKeepAwake } from "expo-keep-awake";


export default function App() {
  useKeepAwake();
  return (
    <SafeAreaProvider>
      <DriverNavigator />
    </SafeAreaProvider>
  );
}
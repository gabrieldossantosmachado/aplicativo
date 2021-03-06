import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
// import * as Font from "expo-font";

import Routes from "./src/routes";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />

      <StatusBar style="auto" />
    </View>
  );
}

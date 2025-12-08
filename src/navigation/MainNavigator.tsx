// src/navigation/MainNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { MainStackParamList } from "./types";
import { MAIN_ROUTES } from "./routes";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator<MainStackParamList>();

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ color: "white" }}>Home</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ color: "white" }}>Profile</Text>
  </View>
);

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={MAIN_ROUTES.Home} component={HomeScreen} />
      <Stack.Screen name={MAIN_ROUTES.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
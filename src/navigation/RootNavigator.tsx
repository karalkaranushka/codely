// src/navigation/RootNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import { ROOT_ROUTES } from "./routes";
import OnboardingScreen from "../features/onboarding/screens/OnboardingScreen";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={ROOT_ROUTES.Onboarding}
          component={OnboardingScreen}
        />
        <Stack.Screen name={ROOT_ROUTES.AuthStack} component={AuthNavigator} />
        <Stack.Screen name={ROOT_ROUTES.MainStack} component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
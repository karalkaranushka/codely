import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "./types";
import { AUTH_ROUTES } from "./routes";
import PhoneLoginScreen from "../features/auth/screens/PhoneLoginScreen";
import VerifyOtpScreen from "../features/auth/screens/VerifyOtpScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={AUTH_ROUTES.PhoneLogin}
        component={PhoneLoginScreen}
      />
      <Stack.Screen
        name={AUTH_ROUTES.VerifyOtp}
        component={VerifyOtpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
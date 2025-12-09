import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreferencesSetupScreen from "../features/preference/screens/PreferencesSetupScreen";

export type PreferencesStackParamList = {
  PreferencesSetup: undefined;
};

const Stack = createNativeStackNavigator<PreferencesStackParamList>();

const PreferencesNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PreferencesSetup"
        component={PreferencesSetupScreen}
      />
    </Stack.Navigator>
  );
};

export default PreferencesNavigator;
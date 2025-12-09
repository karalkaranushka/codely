import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlassTabBar } from "./components/GlassTabBar";

const Tab = createBottomTabNavigator();

const Screen = () => <View style={{ flex: 1, backgroundColor: "#050814" }} />;

export const RootTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => (
          <GlassTabBar
            {...props}
            // easy extension later:
            // showActiveDot={false}
            // showLabels={false}
          />
        )}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Feed" component={Screen} />
        <Tab.Screen name="Saved" component={Screen} />
        <Tab.Screen name="Search" component={Screen} />
        <Tab.Screen name="Profile" component={Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
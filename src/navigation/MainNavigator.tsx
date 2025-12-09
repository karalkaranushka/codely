import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { MainStackParamList } from "./types";
import { MAIN_ROUTES } from "./routes";
import { GlassTabBar } from "./components/GlassTabBar";
import { View, Text } from "react-native";
import { FeedScreen } from "../features/feed/screens/FeedScreen";
import { SavedScreen } from "../features/saved/screens/SavedScreen";
import { SearchScreen } from "../features/search/screens/SearchScreen";

const Tab = createBottomTabNavigator<MainStackParamList>();


const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ color: "white" }}>Profile</Text>
  </View>
);

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <GlassTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={MAIN_ROUTES.Feed} component={FeedScreen} />
      <Tab.Screen name={MAIN_ROUTES.Saved} component={SavedScreen} />
      <Tab.Screen name={MAIN_ROUTES.Search} component={SearchScreen} />
      <Tab.Screen name={MAIN_ROUTES.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "@react-native-community/blur";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { GLASS_TAB } from "../theme";

export interface GlassTabBarExtraOptions {
  showActiveDot?: boolean;
  showLabels?: boolean;
}

export type GlassTabBarProps = BottomTabBarProps & GlassTabBarExtraOptions;

export const GlassTabBar: React.FC<GlassTabBarProps> = ({
  state,
  descriptors,
  navigation,
  showActiveDot = true,
  showLabels = true,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        Platform.OS === "android" && styles.androidWrapper,
        Platform.OS === "ios" && styles.iosWrapper,
      ]}
    >
      <BlurView
        blurType="dark"
        blurAmount={
          Platform.OS === "ios"
            ? GLASS_TAB.IOS_BLUR_INTENSITY
            : GLASS_TAB.ANDROID_BLUR_INTENSITY
        }
        style={styles.blurContainer}
      >
        <SafeAreaView edges={["bottom"]} style={styles.innerContainer}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel ??
              options.title ??
              (route.name as string);

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabItem}
                activeOpacity={0.85}
              >

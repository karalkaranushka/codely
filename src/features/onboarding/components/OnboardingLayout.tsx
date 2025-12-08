import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ONBOARDING_COLORS, ONBOARDING_RADIUS, ONBOARDING_SPACING } from "../theme";

interface Props {
  children: React.ReactNode;
}

const OnboardingLayout: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
        <View style={styles.deviceCard}>{children}</View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: ONBOARDING_COLORS.screenBg,
    paddingHorizontal: ONBOARDING_SPACING.screenPadding,
  },
  centerWrapper: {
    flex: 1,
    // paddingHorizontal: ONBOARDING_SPACING.screenPadding,
    justifyContent: "center",
  },
  deviceCard: {
    flex: 1,
  },
});

export default OnboardingLayout;
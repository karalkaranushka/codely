import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { AUTH_COLORS, AUTH_SPACING } from "../theme";

interface Props {
  children: React.ReactNode;
}

const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
        <View>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: AUTH_COLORS.screenBg,
    paddingHorizontal: AUTH_SPACING.screenPadding,
  },
});

export default LoginLayout;
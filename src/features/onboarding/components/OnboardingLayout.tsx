import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ParticleDonut from "./ParticleDonut";

type ThemeType = "light" | "dark";

interface Props {
  children: React.ReactNode | ((args: { theme: ThemeType }) => React.ReactNode);
  theme?: ThemeType;
}

const THEMES = {
  light: {
    screenBg: "#f7f8fa",
    donutDot: "#6d93e8",
    donutShadow: "#86b8ff",
    statusBar: "dark-content" as const,
  },
  dark: {
    screenBg: "#181c23",
    donutDot: "#6d93e8",
    donutShadow: "#86b8ff",
    statusBar: "light-content" as const,
  },
};

const LAYOUT = {
  screenPadding: 24,
};

function renderChildren(
  children: Props["children"],
  theme: ThemeType
) {
  if (typeof children === "function") {
    return children({ theme });
  }

  return React.Children.map(children, child =>
    React.isValidElement(child)
      ? React.cloneElement(child as any, { theme })
      : child
  );
}

const Background = ({ theme }: { theme: ThemeType }) => {
  const palette = THEMES[theme];

  return (
    <View style={[StyleSheet.absoluteFill, styles.background]}>
      <ParticleDonut
        dotColor={palette.donutDot}
        shadowColor={palette.donutShadow}
        theme={theme}
      />
    </View>
  );
};

const OnboardingLayout: React.FC<Props> = ({
  children,
  theme = "light",
}) => {
  const palette = THEMES[theme];

  return (
    <View style={[styles.root, { backgroundColor: palette.screenBg }]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={palette.statusBar}
      />

      <Background theme={theme} />

      <SafeAreaView style={styles.safe} pointerEvents="box-none">
        <View style={styles.content} pointerEvents="box-none">
          {renderChildren(children, theme)}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OnboardingLayout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  background: {
    zIndex: 0,
  },
  content: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: LAYOUT.screenPadding,
  },
});
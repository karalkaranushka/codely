import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ThemeType = "light" | "dark";

interface Props {
  title: string;
  subtitle: string;
  theme?: ThemeType;
}

const COLORS = {
  light: {
    primary: "#181c23",
    secondary: "#4B5563",
  },
  dark: {
    primary: "#FFFFFF",
    secondary: "#9CA3AF",
  },
};

const TextSection: React.FC<Props> = ({
  title,
  subtitle,
  theme = "dark",
}) => {
  const palette = COLORS[theme];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: palette.primary }]}>
        {title}
      </Text>
      <View style={styles.spacer} />
      <Text style={[styles.subtitle, { color: palette.secondary }]}>
        {subtitle}
      </Text>
    </View>
  );
};

export default TextSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 8,
  },
  spacer: {
    height: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
});
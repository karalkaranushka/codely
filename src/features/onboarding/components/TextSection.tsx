import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ONBOARDING_COLORS, ONBOARDING_TYPO } from "../theme";

interface Props {
  title: string;
  subtitle: string;
}

const TextSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ height: 8 }} />
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: ONBOARDING_COLORS.primaryText,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: ONBOARDING_COLORS.secondaryText,
    paddingHorizontal: 32,
    textAlign: "center",
    lineHeight: 24,
  },
});

export default TextSection;
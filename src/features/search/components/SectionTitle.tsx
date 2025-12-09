import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FEED_COLORS,
  FEED_SPACING,
  FEED_TYPO,
} from "../../feed/theme";

interface Props {
  label: string;
}

export const SectionTitle: React.FC<Props> = ({ label }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: FEED_SPACING.screenPadding,
    paddingTop: 24,
    paddingBottom: 12,
  },
  text: {
    fontSize: FEED_TYPO.subtitle,
    color: FEED_COLORS.textSecondary,
    fontWeight: "600",
  },
});
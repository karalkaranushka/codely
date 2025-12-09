import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FEED_COLORS,
  FEED_SPACING,
  FEED_TYPO,
} from "../../feed/theme";

interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: FEED_SPACING.screenPadding,
    paddingTop: 24,
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: FEED_TYPO.subtitle,
    color: FEED_COLORS.textSecondary,
    fontWeight: "600",
  },
});
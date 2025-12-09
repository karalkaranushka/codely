import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FEED_COLORS,
  FEED_SPACING,
  FEED_TYPO,
} from "../../feed/theme";

interface Props {
  totalSaved: number;
}

export const SavedHeader: React.FC<Props> = ({ totalSaved }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Saved Updates</Text>
        <Text style={styles.subtitle}>{totalSaved} saved</Text>
      </View>

      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: FEED_SPACING.screenPadding,
    backgroundColor: FEED_COLORS.background,
  },
  titleBlock: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: FEED_COLORS.textPrimary,
  },
  subtitle: {
    marginTop: 4,
    fontSize: FEED_TYPO.subtitle,
    color: FEED_COLORS.sectionLabel,
  },
  divider: {
    height: 1,
    backgroundColor: FEED_COLORS.divider,
    marginHorizontal: -FEED_SPACING.screenPadding, // extend to full width
  },
});
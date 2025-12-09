import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FEED_COLORS,
  FEED_SPACING,
  FEED_TYPO,
} from "../../feed/theme";

export const CommunityHeader: React.FC = () => (
  <>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Community</Text>
      <Text style={styles.headerSubtitle}>
        Connect with developers
      </Text>
    </View>
    <View style={styles.headerDivider} />
  </>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: FEED_SPACING.screenPadding,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: FEED_COLORS.textPrimary,
  },
  headerSubtitle: {
    marginTop: 4,
    fontSize: FEED_TYPO.subtitle,
    color: FEED_COLORS.sectionLabel,
  },
  headerDivider: {
    height: 1,
    backgroundColor: FEED_COLORS.divider,
  },
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FEED_COLORS, FEED_SPACING, FEED_TYPO } from "../theme";

interface Props {
  title: string;
}

export const SectionHeader: React.FC<Props> = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 52,
    justifyContent: "center",
    paddingHorizontal: FEED_SPACING.screenPadding,
    backgroundColor: FEED_COLORS.cardBackground, 
    borderWidth: 1,
    borderColor: FEED_COLORS.divider, 
    marginBottom: 20, 
    marginHorizontal: -10
  },
  text: {
    fontSize: FEED_TYPO.section,
    letterSpacing: 1.2,
    paddingLeft: 14,
    textTransform: "uppercase",
    fontWeight: "600",
    color: FEED_COLORS.sectionLabel,
  },
});
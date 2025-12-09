import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FEED_COLORS, FEED_RADIUS } from "../theme";

interface Props {
  label: string;
  onPress?: () => void;
}

export const FilterChip: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: FEED_COLORS.chipBorder,
    backgroundColor: FEED_COLORS.chipBg,
  },
  icon: {
    width: 12,
    height: 12,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: FEED_COLORS.textMuted,
    marginRight: 8,
  },
  label: {
    fontSize: 13,
    color: FEED_COLORS.chipText,
    fontWeight: "500",
  },
});
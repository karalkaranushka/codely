import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  FEED_COLORS,
  FEED_RADIUS,
  FEED_TYPO,
} from "../../feed/theme";
import type { RecentSearch } from "../types";

interface Props {
  item: RecentSearch;
  onPress: (item: RecentSearch) => void;
}

export const RecentSearchItem: React.FC<Props> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item)}
      style={styles.wrapper}
    >
      <View style={styles.card}>
        <Text style={styles.text}>{item.query}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  card: {
    borderRadius: FEED_RADIUS.card,
    backgroundColor: FEED_COLORS.cardBackground,
    borderWidth: 1,
    borderColor: FEED_COLORS.cardBorder,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: FEED_TYPO.subtitle,
    color: FEED_COLORS.textPrimary,
    fontWeight: "500",
  },
  chevron: {
    width: 8,
    height: 13,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: FEED_COLORS.textMuted,
    transform: [{ rotate: "0deg" }],
  },
});